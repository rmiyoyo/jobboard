import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    await prisma.$connect();
    const jobCount = await prisma.job.count();
    const jobs = await prisma.job.findMany({ take: 2 });
    return NextResponse.json({ 
      status: 'ok', 
      jobCount, 
      jobs: jobs.map(job => ({ id: job.id, title: job.title, slug: job.slug })) 
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      status: 'error', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}