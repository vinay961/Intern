import React, { useState } from 'react';

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    desc: '',
    category: '',
    author: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });
      
      if (response.ok) {
        setSuccessMessage('Blog added successfully!');
        setBlogData({
          title: '',
          desc: '',
          category: '',
          author: '',
        });
      } else {
        console.error('Failed to add the blog');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-300 font-sans">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-white mb-8">Add a New Blog</h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-400">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={blogData.title}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-400">Description</label>
            <textarea
              id="desc"
              name="desc"
              value={blogData.desc}
              onChange={handleChange}
              className="w-full p-3 h-32 rounded bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-400">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={blogData.category}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-400">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={blogData.author}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Add Blog
          </button>

          {/* Success message */}
          {successMessage && <p className="mt-4 text-center text-green-500">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
