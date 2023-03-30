"use client";
import React, { use } from "react";
import { PostCard, Categories, PostWidget } from ".";
import { getPosts } from "./services";
// import useSWR from "swr";

// This is Static Side API Request
const getData = async () => {
  try {
    let data = await getPosts();
    return data;
  } catch (error) {
    // console.log("Error", error);
    return { message: error };
  }
};

// This Server Side API Request --- Not Completed
// const getData = async () => {
//   try {
//     let data = (await getPosts(), { cache: "no-store" });
//     return data;
//   } catch (error) {
//     console.log("Error", error);
//     return { message: "Cannot Fetch" };
//   }
// };

// Using SWR Client Side using "use client"
// const fetcher = async () => {
//   return await getPosts();
// };

const Home = () => {
  // const posts = use(getData());

  const posts = use(getData());
  // console.log("Data", posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => {
            return (
              // <>
              <div key={index}>
                <PostCard post={post?.node} key={index} />
              </div>
              // </>
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
    </div>
  );
};

// export async function getStaticProps() {
//   let posts = (await getPosts()) || [];

//   return {
//     props: { posts }, // will be passed to the page component as props
//   };
// }

export default Home;
