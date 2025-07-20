import { prisma } from './db';
import { generateUniqueSlug } from './utils';
import { cache } from 'react';
import { Prisma } from '@prisma/client';

// Define Job type to match Prisma schema
export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  requirements: string[];
  email: string;
  postedAt: Date;
  slug: string;
};

export type PaginatedJobs = {
  jobs: Job[];
  totalJobs: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

const JOBS_PER_PAGE = 8;

// Cache for all jobs (up to 50 for performance)
export const getJobs = cache(async (): Promise<Job[]> => {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { postedAt: 'desc' },
      take: 50,
    });

    return jobs.map((job: Prisma.JobGetPayload<{}>) => ({
      ...job,
      salary: job.salary === null ? undefined : job.salary,
    }));
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
});

// Paginated function for server-side pagination
export const getPaginatedJobs = cache(async (page: number = 1): Promise<PaginatedJobs> => {
  try {
    const skip = (page - 1) * JOBS_PER_PAGE;

    const [jobs, totalJobs] = await Promise.all([
      prisma.job.findMany({
        orderBy: { postedAt: 'desc' },
        skip,
        take: JOBS_PER_PAGE,
      }),
      prisma.job.count(),
    ]);

    return {
      jobs: jobs.map((job: Prisma.JobGetPayload<{}>) => ({
        ...job,
        salary: job.salary === null ? undefined : job.salary,
      })),
      totalJobs,
      totalPages: Math.ceil(totalJobs / JOBS_PER_PAGE),
      currentPage: page,
      hasNextPage: page < Math.ceil(totalJobs / JOBS_PER_PAGE),
      hasPreviousPage: page > 1,
    };
  } catch (error) {
    console.error('Error fetching paginated jobs:', error);
    return {
      jobs: [],
      totalJobs: 0,
      totalPages: 0,
      currentPage: 1,
      hasNextPage: false,
      hasPreviousPage: false,
    };
  }
});

// Client-side pagination helper
export function paginateJobs(jobs: Job[], page: number = 1): PaginatedJobs {
  const startIndex = (page - 1) * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const paginatedJobs = jobs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  return {
    jobs: paginatedJobs,
    totalJobs: jobs.length,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
}

export const getJobBySlug = cache(async (slug: string): Promise<Job | null> => {
  try {
    const job = await prisma.job.findUnique({
      where: { slug },
    });

    if (!job) return null;

    return {
      ...job,
      salary: job.salary === null ? undefined : job.salary,
    };
  } catch (error) {
    console.error('Error fetching job by slug:', error);
    return null;
  }
});

export async function addJob(jobData: Omit<Job, 'id' | 'postedAt' | 'slug'>): Promise<Job> {
  try {
    const slug = await generateUniqueSlug(jobData.title, jobData.company);
    const job = await prisma.job.create({
      data: {
        ...jobData,
        slug,
      },
    });

    return {
      ...job,
      salary: job.salary === null ? undefined : job.salary,
    };
  } catch (error) {
    console.error('Error creating job:', error);
    throw new Error('Failed to create job');
  }
}