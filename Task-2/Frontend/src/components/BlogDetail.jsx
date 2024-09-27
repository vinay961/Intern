import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:4500/blog/getblog/${id}`);
        const data = await response.json();
        setBlog(data.blog);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-300 font-sans p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
        <p className="text-gray-400 mb-2">Category: {blog.category}</p>
        <p className="text-gray-400 mb-2">Author: {blog.author}</p>
        <p className="text-gray-400 mb-2">
          Created At: {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-400 mb-4">{blog.desc}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
