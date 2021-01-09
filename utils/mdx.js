import fs from "fs";
import path from "path";
import matter from "gray-matter";

// BLOGS_PATH is useful when you want to get the path to a specific file
export const BLOGS_PATH = path.join(process.cwd(), "blogs");

// blogFilePaths is the list of all mdx files inside the BLOGS_PATH directory
export const blogFilePaths = fs
  .readdirSync(BLOGS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

// gets all of the blog posts' front matter
export async function getAllFilesFrontMatter() {
  const blogFilePaths = fs.readdirSync(BLOGS_PATH);

  return blogFilePaths
    .reduce((allPosts, postSlug) => {
      // gets Buffer data from the blog post
      const source = fs.readFileSync(path.join(BLOGS_PATH, postSlug));
      // converts Buffer data into the meta data
      const { data } = matter(source);

      return [
        {
          ...data,
          slug: postSlug.replace(".mdx", ""),
        },
        ...allPosts,
      ];
    }, [])
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
}
