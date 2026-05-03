import Container from "@/components/Container";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>

      <p className="mt-4 text-gray-700 max-w-2xl">
        Short reflections on product leadership, enterprise data platforms,
        analytics strategy, governance, and AI enablement.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 text-sm text-gray-700">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-sm font-medium underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}