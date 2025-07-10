import { NextResponse } from 'next/server'
import { addJob } from '@/lib/jobs'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const job = await addJob(body)
    return NextResponse.json(job)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}