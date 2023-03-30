import Image from "next/image";
import { PostCard, Categories, PostWidget } from "./components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const posts = [
  { title: "React Testing", excerpt: "Learn React testing" },
  {
    title: "Next",
    excerpt: "Learn Next Testing",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => {
            return (
              <>
                <PostCard post={post} />
              </>
            );
          })}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
