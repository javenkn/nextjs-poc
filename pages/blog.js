import React from "react";
import faker from "faker";
import Link from "next/link";
import Card from "../components/Card";
import { getAllFilesFrontMatter } from "../utils/mdx";

function Blog({ blogs }) {
  console.log(blogs);
  return (
    <>
      <h1 className="my-4 self-start">Blogs</h1>
      <div className="grid lg:grid-cols-6 gap-4 justify-items-center w-full mt-2">
        {blogs.map((blog, i) => {
          let colSpan = "lg:col-span-2";
          if (i === 0) {
            colSpan = "lg:col-span-full";
          } else if (i === 1 || i === 2) {
            colSpan = "lg:col-span-3";
          }
          return (
            <Link href={`/blog/${blog.slug}`}>
              <a className={`w-full ${colSpan}`}>
                <Card key={i} {...blog}>
                  <button className="button-link">Read more</button>
                </Card>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const blogs = await getAllFilesFrontMatter();
  return {
    props: { blogs },
  };
}
