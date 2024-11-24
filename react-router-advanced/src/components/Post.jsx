// src/components/Post.jsx
import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      {/* Example content: Fetch the post data dynamically based on postId */}
    </div>
  );
}

export default Post;
