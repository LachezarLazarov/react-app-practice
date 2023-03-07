import './App.css';
import { useState } from 'react';
import { FormCreator } from './components/todo-creator';
import { TodoItem } from './components/todo-item/todo-item';
import json from './todos.json';

function App() {
  let [todos, addTodos] = useState(json);


  const addTodo = (title) => {
    addTodos([...todos, { title, isDone: false }])

    console.log(todos);
  }

  const removeTodo = (index) => {
    return () => {
      const tds = todos.filter((todo, idx) => index !== idx);
      addTodos(tds);
    }
  };

  const checkItem = (index) => {
    return () => {
      todos[index].isDone = !todos[index].isDone;
      addTodos([...todos]);
    }
  }

  return (
    <div className="App">
      <h1>Todo app</h1>
      <hr />

      <FormCreator createTodo={addTodo} />
      <div className='container'>
      <div>
      <h2>Todo</h2>
        {
          todos.map((todo, index) => {
            if(todo.isDone === false){
              return (
                <TodoItem key={index} itemIndex={index} removeItem={removeTodo(index)} todo={todo} checkItem={checkItem(index)} />
                );
              }
          })
        }
      </div>
      <div>
      <h2>Done</h2>
      {
        todos.map((todo, index) => {
          if(todo.isDone === true){
            return (
              <TodoItem key={index} itemIndex={index} removeItem={removeTodo(index)} todo={todo} checkItem={checkItem(index)} />
            );
          }
        })
      }
      </div>
    </div>
    </div>
  );
}

export default App;
