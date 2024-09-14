import React, { useState } from 'react';

const ViewTask = () => {
  // Sample data for tasks
  const initialTasks = [
    { id: 1, taskName: 'Buy Groceries', description: 'Buy fruits and vegetables', isCompleted: false },
    { id: 2, taskName: 'Complete Homework', description: 'Finish math assignment', isCompleted: false },
    { id: 3, taskName: 'Clean Room', description: 'Organize books and clean the floor', isCompleted: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  // Mark task as completed
  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 p-6">
      <h1 className="text-4xl font-bold text-gray-200 mb-8">View Tasks</h1>
      <div className="max-w-3xl w-full bg-gray-300 shadow-lg rounded-md p-6">
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="mb-6 p-4 bg-gray-200 rounded-md shadow-md">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className={`text-2xl font-semibold ${task.isCompleted ? 'line-through text-gray-500' : ''}`}>
                      {task.taskName}
                    </h3>
                    <p className={`text-gray-700 ${task.isCompleted ? 'line-through' : ''}`}>
                      {task.description}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => completeTask(task.id)}
                      className={`px-4 py-2 rounded-md text-white ${task.isCompleted ? 'bg-green-600' : 'bg-blue-500'} hover:bg-opacity-95`}
                    >
                      {task.isCompleted ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
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
    </div>
  );
};

export default ViewTask;
