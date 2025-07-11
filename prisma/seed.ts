import { PrismaClient } from '@prisma/client';
import { generateUniqueSlug } from '../lib/utils';

const prisma = new PrismaClient();

async function main() {
  const jobs = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Africa',
      location: 'Nairobi, Kenya',
      type: 'full-time',
      salary: 'KES 120,000 - 180,000',
      description: 'Join our dynamic team to build cutting-edge web applications using React and Next.js.',
      requirements: ['3+ years React experience', 'TypeScript proficiency', 'Next.js knowledge'],
      email: 'hr@techcorp.co.ke',
    },
    {
      title: 'Marketing Manager',
      company: 'Growth Solutions Ltd',
      location: 'Lagos, Nigeria',
      type: 'full-time',
      salary: 'NGN 200,000 - 300,000',
      description: 'Lead marketing initiatives and drive brand growth across African markets.',
      requirements: ['5+ years marketing experience', 'Digital marketing expertise', 'Team leadership'],
      email: 'careers@growthsolutions.ng',
    },
  ];

  for (const job of jobs) {
    const slug = await generateUniqueSlug(job.title, job.company);
    await prisma.job.create({
      data: {
        ...job,
        slug,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });