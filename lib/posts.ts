import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const [titleLine, ...bodyLines] = fileContents.split("\n");
    const title = titleLine.replace("# ", "").trim();
    const excerpt = bodyLines.join("\n").trim().slice(0, 160) + "...";

    return {
      slug,
      title,
      excerpt,
    };
  });

  return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const [titleLine, ...bodyLines] = fileContents.split("\n");
  const title = titleLine.replace("# ", "").trim();
  const content = bodyLines.join("\n").trim();

  return { title, content };
}