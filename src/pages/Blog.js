import React, { useState } from "react";
import BlogMenu from "../components/BlogMenu";
import blogPosts from "../data/blogPost"; // ✅ Import blogPosts here
import blogStyle from "../styles/Blogstyle.module.scss";

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className={blogStyle.parent}>
     
      <BlogMenu posts={blogPosts} onSelect={setSelectedPost} /> {/* ✅ Pass posts */}
      <div className={blogStyle.readPost}>
    
      {selectedPost && (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <h3>{selectedPost.subTitle2}</h3>
          <p>{selectedPost.content2}</p>
          <lu>
            <li>{selectedPost.point1}</li>
            <li>{selectedPost.point2}</li>
            <li>{selectedPost.point3}</li>
            <li>{selectedPost.point4}</li>
          </lu>
          <h3>{selectedPost.subTitle3}</h3>
          <p>{selectedPost.content3}</p>
          <lu>
            <li>{selectedPost.point5}</li>
            <li>{selectedPost.point6}</li>
            <li>{selectedPost.point7}</li>
            <li>{selectedPost.point8}</li>
          </lu>

        </div>
      )}
      </div>
  
    </div>
  );
}

export default Blog;

