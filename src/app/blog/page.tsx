import Link from "next/link";
import { getPosts } from "../lib/posts";

export default function Page() {
  const posts = getPosts();

  return (
    <main className="h-auto pt-5 flex flex-col justify-center items-center gap-5">
      {posts.map((singlePost) => {
        return (
          <div className="h-[10vh] w-[20vw] flex items-center gap-5">
            <Link href={`/blog/${singlePost.id}`} key={singlePost.id}>
              {singlePost.title}
            </Link>
            -&gt;
          </div>
        );
      })}
    </main>
  );
}
