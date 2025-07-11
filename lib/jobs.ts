import { prisma } from './db';
import { generateUniqueSlug } from './utils';

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

export async function getJobs(): Promise<Job[]> {
  const jobs = await prisma.job.findMany({
    orderBy: { postedAt: 'desc' },
  });
  return jobs.map(job => ({
    ...job,
    salary: job.salary === null ? undefined : job.salary,
  }));
}

export async function getJobById(id: string): Promise<Job | null> {
  const job = await prisma.job.findUnique({
    where: { id },
  });
  if (!job) return null;
  return {
    ...job,
    salary: job.salary === null ? undefined : job.salary,
  };
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const job = await prisma.job.findUnique({
    where: { slug },
  });
  if (!job) return null;
  return {
    ...job,
    salary: job.salary === null ? undefined : job.salary,
  };
}

export async function addJob(jobData: Omit<Job, 'id' | 'postedAt' | 'slug'>): Promise<Job> {
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
}