import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import { PostCard } from '@/components/post-card'

export default async function Home() {
  const posts = await getPosts()
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 4)

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Post</h2>
        {featuredPost && (
          <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{featuredPost.title}</h3>
              <p className="text-muted-foreground mb-4">{featuredPost.content.substring(0, 200)}...</p>
              <Link href={`/posts/${featuredPost.slug}`} className="text-primary hover:underline">
                Read more
              </Link>
            </div>
          </div>
        )}
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

