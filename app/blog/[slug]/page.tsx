import Container from "@/components/Container";
import { getPostBySlug } from "@/lib/posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>

      <article className="mt-8">
        <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
          {post.content}
        </pre>
      </article>
    </Container>
  );
}