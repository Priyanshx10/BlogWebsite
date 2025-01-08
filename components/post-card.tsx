import Link from 'next/link'
import { Post } from '@prisma/client'

interface PostCardProps {
  post: Post & {
    author: {
      name: string | null;
      image: string | null;
    };
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4">{post.content.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <Link href={`/posts/${post.slug}`} className="text-primary hover:underline">
            Read more
          </Link>
          <span className="text-sm text-muted-foreground">{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

