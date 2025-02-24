import React, { useState } from "react";

function BlogMenu({ posts, onSelect }) {
  return (
    <div>
      <h2>Blog Menu 📚</h2>
      {posts.map((post) => (
        <button 
          key={post.id} 
          onClick={() => onSelect(post)}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        >
          {post.title}
        </button>
      ))}
    </div>
  );
}

export default BlogMenu;

