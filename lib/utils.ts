import { prisma } from './db';

export function generateSlug(title: string, company: string): string {
  const cleanString = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  return `${cleanString(title)}-at-${cleanString(company)}`;
}

export async function generateUniqueSlug(title: string, company: string, excludeId?: string): Promise<string> {
  let baseSlug = generateSlug(title, company);
  let slug = baseSlug;
  let counter = 1;

  while (
    await prisma.job.findFirst({
      where: {
        slug,
        id: { not: excludeId },
      },
    })
  ) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}