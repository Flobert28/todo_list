import React, { useState } from 'react';
import styles from "./TodoList.module.css"

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (text, completed = false) => {
    setTasks([...tasks, { text, completed }]);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task1, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (newTask.length > 0) {
      addTask(newTask, false);
      setNewTask('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className={styles.btn} onClick={handleAddButtonClick}>Add</button>
      </div>

      <div>
        <ul className={styles.line}>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
                {task.text}
              </span>
              <button className={styles.btn1} onClick={() => removeTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
