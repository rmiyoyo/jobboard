import { Job } from '@/types/job';

// In-memory storage for demo purposes
let jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'Nairobi, Kenya',
    type: 'full-time',
    salary: 'KES 150,000 - 200,000',
    description: 'We are looking for a skilled Senior Software Engineer to join our growing team. You will be responsible for designing, developing, and maintaining scalable web applications.',
    requirements: ['5+ years experience', 'React/Next.js', 'TypeScript', 'Node.js'],
    postedAt: new Date('2024-01-15'),
    email: 'jobs@techcorp.co.ke'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'StartupXYZ',
    location: 'Remote',
    type: 'remote',
    salary: 'KES 120,000 - 180,000',
    description: 'Join our product team to drive innovation and growth. You will work closely with engineering and design teams to build amazing products.',
    requirements: ['3+ years PM experience', 'Agile methodologies', 'Data analysis', 'User research'],
    postedAt: new Date('2024-01-10'),
    email: 'careers@startupxyz.com'
  }
];

export function getJobs(): Job[] {
  return jobs.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());
}

export function getJobById(id: string): Job | undefined {
  return jobs.find(job => job.id === id);
}

export function addJob(job: Omit<Job, 'id' | 'postedAt'>): Job {
  const newJob: Job = {
    ...job,
    id: Date.now().toString(),
    postedAt: new Date()
  };
  jobs.push(newJob);
  return newJob;
}