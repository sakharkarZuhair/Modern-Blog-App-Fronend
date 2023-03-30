import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="text-[#f76236]">
      {post.title}
      {post.excerpt}
    </div>
  );
};

export default PostCard;
