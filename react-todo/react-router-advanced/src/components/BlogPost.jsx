// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // dynamic id from URL

  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This is the content for blog post with ID {id}.</p>
    </div>
  );
}

export default BlogPost;
