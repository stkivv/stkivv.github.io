import matter from "gray-matter";
import { marked } from "marked";

const allPosts = import.meta.glob("/src/lib/posts/*.md", {
  eager: true,
  as: "raw",
});

export function getAllPosts() {
  return Object.entries(allPosts).map(([path, raw]) => {
    const slug = path.split("/").pop()?.replace(".md", "");
    const { data } = matter(raw);
    return { slug, ...data };
  });
}

export function getPost(slug) {
  const key = `/src/lib/posts/${slug}.md`;
  const raw = allPosts[key];
  if (!raw) throw new Error(`Post not found: ${slug}`);
  const { data, content } = matter(raw);
  const html = marked(content);
  return { slug, ...data, html };
}
