import { notFound } from "next/navigation";
import { POSTS, formatPostDate, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Content, title, subtitle, kicker, date } = post;

  return (
    <article className="mx-auto max-w-2xl px-6 pt-16">
      {kicker && (
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          {kicker}
        </p>
      )}
      <h1 className="mt-3 font-sans text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-xl text-muted-foreground">{subtitle}</p>
      )}
      <p className="mt-6 font-sans text-sm text-muted-foreground">
        {formatPostDate(date)}
      </p>
      <hr className="mt-6 border-border" />

      <div className="prose mt-8">
        <Content />
      </div>
    </article>
  );
}
