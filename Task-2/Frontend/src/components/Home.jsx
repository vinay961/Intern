import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios if you're using it

const HomePage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:4500/blog/getblog');
  
        if (response.ok) {
          const data = await response.json();
          console.log(data); 
          setBlogs(data.data);
        } else {
          console.error('Failed to fetch blogs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
  
    fetchBlogs();
  }, []);
  

  // Function to delete a blog
  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog._id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-300 font-sans">
      
      {/* Header */}
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Blogify</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/" className="hover:text-gray-400">About</a></li>
              <li><a href="/" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 flex-grow">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white">My Blog</h1>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-2xl font-bold mb-4 text-white">{blog.title}</h2>
              <p className="text-gray-400 mb-2">Category: {blog.category}</p>
              <p className="text-gray-400 mb-2">Author: {blog.author}</p>
              <p className="text-gray-400 mb-2">Published: {new Date(blog.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-400 mb-4">{blog.content}</p>
              <div className="flex justify-between">
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300"
                  onClick={() => deleteBlog(blog._id)}
                >
                  Delete
                </button>
                <button onClick={()=>{navigate(`/viewblog/${blog._id}`)}} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  View Blog
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Blog Button */}
        <div className="mt-8 text-center">
          <button onClick={() => { navigate('/addpost'); }} className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300">
            Add New Blog
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2024 Blogify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
