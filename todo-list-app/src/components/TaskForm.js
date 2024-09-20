import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSubmit }) => {
  const [title, setTitle] = useState(task ? task.title : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: task ? task.id : Date.now(), title });
    setTitle('');  
  };

  useEffect(() => {
    if (task) setTitle(task.title);
  }, [task]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
        required
      />
      <button type="submit">{task ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
