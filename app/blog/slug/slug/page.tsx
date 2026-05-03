import Container from "@/components/Container";
import { getPostBySlug } from "@/lib/posts";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>

      <article className="mt-8 prose prose-gray max-w-none">
        <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
          {post.content}
        </pre>
      </article>
    </Container>
  );
}