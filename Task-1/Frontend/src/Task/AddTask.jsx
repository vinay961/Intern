import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && description) {
      onAddTask({ taskName, description });
      setTaskName('');
      setDescription('');
    }
  };

  const handleViewTasks = () => {
    navigate('/tasks'); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-700 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to Task Manager</h1>
      <div className="max-w-lg w-full p-8 bg-white shadow-lg rounded-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition duration-200 mb-4"
          >
            Add Task
          </button>
        </form>
        <button
          onClick={handleViewTasks}
          className="w-full bg-red-500 text-white px-4 py-3 rounded-md hover:bg-red-600 transition duration-200"
        >
          View Tasks
        </button>
      </div>
    </div>
  );
};

export default AddTask;
