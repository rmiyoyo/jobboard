import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { addJob, getPaginatedJobs } from '@/lib/jobs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);

    const paginatedJobs = await getPaginatedJobs(page);

    return NextResponse.json(paginatedJobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const job = await addJob(body);

    await revalidatePath('/');

    return NextResponse.json(job);
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
}