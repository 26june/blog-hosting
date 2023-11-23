import Link from "next/link";

export default function MyHeader() {
  return (
    <div className="bg-gray-400 h-[10vh] w-full">
      <Link href={"/blog"}>Go Back to Blog</Link>
    </div>
  );
}
