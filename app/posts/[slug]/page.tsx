import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/posts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-6">
        <Avatar className="h-10 w-10 mr-4">
          <AvatarImage src={post.author.image || undefined} alt={post.author.name || ''} />
          <AvatarFallback>{post.author.name?.[0] || 'U'}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-sm text-muted-foreground">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

