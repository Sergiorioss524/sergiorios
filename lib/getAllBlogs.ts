import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileNames: string) {
  let { meta, default: component } = await import(
      `../../app/blog/${blogFileNames}` // Adjust relative path
      );
  return {
    slug: blogFileNames.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}


export async function getAllBlogs() {
  let blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "src/app/blog"), // Remove leading slash
  });


  let blogs = await Promise.all(blogFileNames.map(importBlog));

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
