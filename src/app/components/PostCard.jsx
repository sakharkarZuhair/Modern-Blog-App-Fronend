import React from "react";
import moment from "moment";
import Link from "next/link";
import { AiFillCalendar } from "react-icons/ai";

const PostCard = ({ post }) => {
  // console.log("Post", post);
  return (
    <div className="bg-white shadow-lg shadow-white rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post?.image?.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg: rounded-lg"
        />
      </div>
      <h1 className="transition duration-200 text-center mb-8 cursor-pointer hover:text-[#f76236] text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center justify-center items-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post?.author?.image}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post?.author?.photo?.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post?.author?.name}
          </p>
        </div>
        <div className="font-medium text-gray-700 flex items-center">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"></svg> */}
          <AiFillCalendar size={26} />

          <span className="ml-2">
            {moment(post?.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-lg tect-grey-700 font-normal px-4 lg:p-2 mb-8">
        {post?.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post?.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-black text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
      {/* {post.title}
      {post.excerpt} */}
    </div>
  );
};

export default PostCard;
