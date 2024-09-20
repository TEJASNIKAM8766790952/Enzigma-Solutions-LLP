import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.length > 0 ? tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => onEdit(task.id)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        )) : <p>No tasks available. Add one!</p>}
      </ul>
    </div>
  );
};

export default TaskList;
