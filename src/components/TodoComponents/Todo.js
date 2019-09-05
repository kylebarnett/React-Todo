import React from 'react';

export default function Todo(props) {
  return (
    <div className="todo-container">
      <p className={`el${props.el.completed ? ' completed' : ''}`} onClick={() => props.toggleItem(props.el.id)}>{props.el.task}</p>
    </div>
  )
}