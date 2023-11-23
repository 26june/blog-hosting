import { getPostById } from "@/app/lib/posts";
import { log } from "console";

type idParam = { params: { slug: string } };

export default function Page({ params }: idParam) {
  const singlePost = getPostById(+params.slug);

  const { title, author, content } = singlePost[0];

  return (
    <div>
      <h1>{title}</h1>
      <h2>By: {author}</h2>
      <p>{content}</p>
    </div>
  );
}
