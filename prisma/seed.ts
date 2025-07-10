import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: 'Senior Frontend Developer',
        company: 'TechCorp Africa',
        location: 'Nairobi, Kenya',
        type: 'full-time',
        salary: 'KES 120,000 - 180,000',
        description: 'Join our dynamic team to build cutting-edge web applications using React and Next.js.',
        requirements: ['3+ years React experience', 'TypeScript proficiency', 'Next.js knowledge'],
        email: 'hr@techcorp.co.ke'
      },
      {
        title: 'Marketing Manager',
        company: 'Growth Solutions Ltd',
        location: 'Lagos, Nigeria',
        type: 'full-time',
        salary: 'NGN 200,000 - 300,000',
        description: 'Lead marketing initiatives and drive brand growth across African markets.',
        requirements: ['5+ years marketing experience', 'Digital marketing expertise', 'Team leadership'],
        email: 'careers@growthsolutions.ng'
      }
    ]
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })