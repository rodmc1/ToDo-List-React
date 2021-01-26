import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './todolist.css';

const TodoList = ({ dummyTodo }) => {
  const [tasks, setTasks] = useState(dummyTodo);
  const [newTask, setNewTask] = useState([]);

  const addTasks = () => {
    const aNewTasks = {
      name: newTask,
      status: 1,
      editMode: false,
    };

    if (newTask.length) {
      setTasks([...tasks, aNewTasks]);
    }
    setNewTask([]);
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((task, taskIndex) => taskIndex !== indexToRemove));
  };

  const showEditForm = (index) => {
    const newArray = [...tasks];
    newArray[index] = {
      name: newArray[index].name,
      status: newArray[index].status,
      editMode: !newArray[index].editMode,
    };

    setTasks(newArray);
  };

  const updateTask = (text, index) => {
    const newArray = [...tasks];
    newArray[index] = {
      name: text,
      status: newArray[index].status,
      editMode: false,
    };

    setTasks(newArray);
  };

  return (
    <div className="row">
      <div className="ui left aligned eight wide column">
        <h2>Task List</h2>
      </div>
      <div className="ui right aligned eight wide column">
        <div className="ui action fluid input">
          <input
            type="text"
            placeholder="Task Name ..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="ui button" onClick={addTasks}>
            <i className="icon plus"></i>
            Add Task
          </button>
        </div>
      </div>
      <TodoItem
        tasks={tasks}
        removeTasks={removeTask}
        showEditForm={showEditForm}
        updateTask={updateTask}
      />
    </div>
  );
};

export default TodoList;
