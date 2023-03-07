import './todo-item.css'
import { useState } from 'react'
export function TodoItem({todo , checkItem, removeItem }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.title);
  const editTitle = () => {
    if (editing) {
      // save
      todo.title = value;
      setEditing(false);
    } else {
      setEditing(true);
    }
  }
  return (
    <div className="todo__item">
      <input type="checkbox" onChange={checkItem} />

      { editing ? <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/> : todo.title }
      <button onClick={editTitle}>{ editing ? "Save" : "Edit" }</button>
      <button onClick={removeItem}>X</button>

    </div>
  )
}