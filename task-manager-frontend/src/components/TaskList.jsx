import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-300">No tasks found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border table-auto text-white">
        <thead>
          <tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className="text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Status</th>
            <th className="p-2">Due Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr
              key={task._id}
              className="border-b hover:bg-white/10"
            >
              <td className="p-2">{task.title}</td>
              <td className="p-2 capitalize">{task.status}</td>
              <td className="p-2">
                {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-'}
              </td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => onEdit(task)}
                  style={{ backgroundColor: '#00bcd4', color: 'white' }}
                  className="px-3 py-1 rounded font-bold edit-button" // Added edit-button
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task._id)}
                  className="px-3 py-1 rounded font-bold delete-button" // Added delete-button
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
