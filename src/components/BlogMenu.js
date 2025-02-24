import React from "react";
import blogPost from "../data/blogPost";
import blogStyle from "../styles/Blogstyle.module.scss";

function BlogMenu( {onSelect} ) {
  return (
    <div className={blogStyle.menu}>
      {blogPost.length > 0 ? (
        blogPost.map((post) => (
          <button
            className={blogStyle.menuBtn}
            key={post.id}
            onClick={() => onSelect(post)}
          >
            {post.title}
          </button>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
}

export default BlogMenu;


