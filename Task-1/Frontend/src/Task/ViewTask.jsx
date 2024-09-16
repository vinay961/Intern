import React, { useState, useEffect } from 'react';

const ViewTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3500/task/gettask', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();
        setTasks(data.tasks);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Error fetching tasks');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Mark task as completed
  const completeTask = (id) => {
    setTasks(tasks.map(task => task._id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3500/task/deletetask/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setTasks(tasks.filter(task => task._id !== id));
      } else {
        throw new Error('Failed to delete task');
      }
    } catch (error) {
      setError("Unable to delete the task.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 p-6">
      <h1 className="text-4xl font-bold text-gray-200 mb-8">View Tasks</h1>

      {/* Display error message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Show loading spinner */}
      {loading ? (
        <div className="text-white">Loading tasks...</div>
      ) : (
        <div className="max-w-3xl w-full bg-gray-300 shadow-lg rounded-md p-6">
          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task) => (
                <li key={task._id} className="mb-6 p-4 bg-gray-200 rounded-md shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className={`text-2xl font-semibold ${task.isCompleted ? 'line-through text-gray-500' : ''}`}>
                        {task.name}
                      </h3>
                      <p className={`text-gray-700 ${task.isCompleted ? 'line-through' : ''}`}>
                        {task.desc}
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => completeTask(task._id)}
                        className={`px-4 py-2 rounded-md text-white ${task.isCompleted ? 'bg-green-600' : 'bg-blue-500'} hover:bg-opacity-95`}
                      >
                        {task.isCompleted ? 'Undo' : 'Complete'}
                      </button>
                      <button
                        onClick={() => deleteTask(task._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No tasks available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewTask;
