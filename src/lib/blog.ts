import type { ComponentType } from "react";
import FirstPost from "@/media/blog/00-first-post.mdx";

export type Post = {
  slug: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  date: string; // ISO: "YYYY-MM-DD"
  Content: ComponentType;
};

export const POSTS: Post[] = [
  {
    slug: "first-post",
    title: "Welcome",
    subtitle: "The concept of writing is in here",
    kicker: "INTRO",
    date: "2026-05-25",
    Content: FirstPost,
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatPostDate(iso: string): string {
  return new Date(iso + "T00:00:00")
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
}
