import React, { useState } from 'react';

const TodoItem = ({ tasks, removeTasks, updateTask, showEditForm }) => {
  const [editedTask, setEditedTask] = useState('');

  const task = tasks.map((task, index) => {
    const getStatus = (status) => {
      if (status === 1) {
        return 'Not Yet Started';
      } else if (status === 2) {
        return 'In Progress';
      } else if (status === 3) {
        return 'Done';
      }
      return '';
    };

    const getTaskName = () => {
      if (task.editMode) {
        return (
          <input
            type="text"
            defaultValue={task.name}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        );
      }

      return task.name;
    };

    /*
     * returns JSX for actions button
     */
    const getActionButton = () => {
      if (!task.editMode) {
        return (
          <div className="ui buttons">
            <button
              className="ui teal button"
              onClick={(e) => showEditForm(index)}>
              Edit
            </button>
            <div className="or"></div>
            <button
              className="ui red button"
              onClick={() => removeTasks(index)}>
              Remove
            </button>
          </div>
        );
      }

      return (
        <div className="ui buttons">
          <button
            className="ui positive button"
            onClick={() => updateTask(editedTask, index)}>
            Save
          </button>
          <div className="or"></div>
          <button className="ui button" onClick={(e) => showEditForm(index)}>
            Cancel
          </button>
        </div>
      );
    };

    return (
      <tr key={task.name + index}>
        <td className="eight wide column">{getTaskName()}</td>
        <td className="two wide column">{getStatus(task.status)}</td>
        <td className="six wide column center aligned">{getActionButton()}</td>
      </tr>
    );
  });

  return (
    <table className="ui selectable table">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Status</th>
          <th className="center aligned">Action</th>
        </tr>
      </thead>
      <tbody>{task}</tbody>
    </table>
  );
};

export default TodoItem;
