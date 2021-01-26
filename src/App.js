import React from 'react';
import TodoList from './components/TodoList';

const dummyTodo = [
  {
    name: 'Study React',
    status: 2,
    editMode: false,
  },
  {
    name: 'Create Food Delivery App',
    status: 1,
    editMode: false,
  },
];

const App = () => {
  return (
    <div className="ui grid container">
      <TodoList dummyTodo={dummyTodo} />
    </div>
  );
};

export default App;
