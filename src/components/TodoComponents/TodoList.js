// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList (props){
  return (
    props.data.map(el => (
      <Todo el={el} key={el.id} />
    ))
  )
}