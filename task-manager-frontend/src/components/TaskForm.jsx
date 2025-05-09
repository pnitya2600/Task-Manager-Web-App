// import React, { useState, useEffect } from 'react';

// const TaskForm = ({ onSave, editingTask }) => {
//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     status: 'pending',
//     dueDate: ''
//   });

//   useEffect(() => {
//     if (editingTask) {
//       setForm(editingTask);
//     }
//   }, [editingTask]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.title.trim()) {
//       alert('Title is required');
//       return;
//     }
//     onSave(form);
//     setForm({
//       title: '',
//       description: '',
//       status: 'pending',
//       dueDate: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="task-form">
//       <h2>{editingTask ? 'Edit Task' : 'Add Task'}</h2>
//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={form.title}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="description"
//         placeholder="Description"
//         value={form.description}
//         onChange={handleChange}
//       />
//       <select
//         name="status"
//         value={form.status}
//         onChange={handleChange}
//       >
//         <option value="pending">Pending</option>
//         <option value="in progress">In Progress</option>
//         <option value="completed">Completed</option>
//       </select>
//       <input
//         type="date"
//         name="dueDate"
//         value={form.dueDate?.slice(0, 10) || ''}
//         onChange={handleChange}
//       />
//       <button type="submit">
//         {editingTask ? 'Update' : 'Add'}
//       </button>
//     </form>
//   );
// };

// export default TaskForm;

import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, editingTask }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: ''
  });

  useEffect(() => {
    if (editingTask) {
      setForm(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert('Title is required');
      return;
    }
    onSave(form);
    setForm({
      title: '',
      description: '',
      status: 'pending',
      dueDate: ''
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 rounded-lg shadow"
      style={{ backgroundColor: 'rgba(0, 0, 50, 0.7)', color: 'white' }}
    >
      <h2 className="text-lg font-semibold mb-2">
        {editingTask ? 'Edit Task' : 'Add Task'}
      </h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 mb-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 mb-2 rounded"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full p-2 mb-2 rounded"
      >
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={form.dueDate?.slice(0, 10) || ''}
        onChange={handleChange}
        className="w-full p-2 mb-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {editingTask ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TaskForm;
