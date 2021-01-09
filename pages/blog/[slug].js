import fs from "fs";
import path from "path";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { blogFilePaths, BLOGS_PATH } from "../../utils/mdx";
import Link from "next/link";

function BlogPage({ source, frontMatter }) {
  const content = hydrate(source);
  return (
    <>
      <Link href="/">
        <a>👈 Go back home</a>
      </Link>
      <div className="prose">
        <h1>{frontMatter.title}</h1>
        {frontMatter.publishedAt && <p>{frontMatter.publishedAt}</p>}
        {frontMatter.description && <p>{frontMatter.description}</p>}
      </div>
      <main className="prose">{content}</main>
    </>
  );
}

export default BlogPage;

export const getStaticProps = async ({ params }) => {
  console.log("test", params);
  const blogFilePath = path.join(BLOGS_PATH, `${params.slug}.mdx`);

  // gets content from blog in the form of a <Buffer>
  const source = fs.readFileSync(blogFilePath);

  // converts Buffer data into contents and the meta data
  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components: null,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [require("@mapbox/rehype-prism")],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  console.log(blogFilePaths);
  const paths = blogFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
