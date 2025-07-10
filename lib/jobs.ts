import { prisma } from './db'

export type Job = {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary?: string
  description: string
  requirements: string[]
  email: string
  postedAt: Date
}

export async function getJobs(): Promise<Job[]> {
  return await prisma.job.findMany({
    orderBy: { postedAt: 'desc' }
  })
}

export async function getJobById(id: string): Promise<Job | null> {
  return await prisma.job.findUnique({
    where: { id }
  })
}

export async function addJob(jobData: Omit<Job, 'id' | 'postedAt'>): Promise<Job> {
  return await prisma.job.create({
    data: jobData
  })
}