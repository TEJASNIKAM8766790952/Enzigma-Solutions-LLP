import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);    
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (newTask) => {
    if (taskToEdit) {
      setTasks(tasks.map((task) => (task.id === taskToEdit.id ? newTask : task)));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, newTask]);
    }
  };

  const handleEditTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    setTaskToEdit(task);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm task={taskToEdit} onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
