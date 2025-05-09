import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import API from './api';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await API.get('/');
    setTasks(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addOrUpdateTask = async (task) => {
    if (task._id) {
      await API.put(`/${task._id}`, task);
    } else {
      await API.post('/', task);
    }
    fetchTasks();
    setEditingTask(null);
  };

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    fetchTasks();
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">📝 Task Manager</h1>
      <TaskForm onSave={addOrUpdateTask} editingTask={editingTask} />
      {loading ? <p>Loading tasks...</p> : (
        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={deleteTask}
        />
      )}
    </div>
  );
};

export default App;
