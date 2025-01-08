import prisma from './prisma'

export async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: { name: true, image: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return posts.map((post) => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }))
}

export async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: {
        select: { name: true, image: true },
      },
    },
  })

  if (!post) return null

  return {
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }
}

