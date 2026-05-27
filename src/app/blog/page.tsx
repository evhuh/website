import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 pt-16">
      <h1 className="font-sans text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-3 text-muted-foreground">
        DIY Substack :3
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted-foreground">Writing coming soon!</p>
      ) : (
        <div className="mt-10 divide-y divide-border">
          {posts.map((post) => (
            <article key={post.slug} className="py-8">
              {post.kicker && (
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  {post.kicker}
                </p>
              )}
              <h2 className="mt-2 font-sans text-2xl font-bold tracking-tight">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[hsl(var(--highlight))] transition"
                >
                  {post.title}
                </Link>
              </h2>
              {post.subtitle && (
                <p className="mt-2 text-muted-foreground">{post.subtitle}</p>
              )}
              <p className="mt-4 font-sans text-xs text-muted-foreground">
                {formatPostDate(post.date)}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
