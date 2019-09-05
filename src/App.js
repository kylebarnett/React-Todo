import React from 'react';
import dataList from './data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      data: dataList,
      search: ''
    }
  }

  searchTodos = event => {
    this.setState({
      search: event.target.value.substr(0, 20)
    })
  }

  toggleItem = id => {
    this.setState({
      data: this.state.data.map(el => {
        if (el.id === id) {
          return {
            ...el,
            completed: !el.completed
          }
        } else {
          return el
        }
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      data: [...this.state.data, newItem]
    })
    localStorage.setItem("item", newItem.task)
  }

  clearCompleted = () => {
    this.setState({
      data: this.state.data.filter(el => !el.completed)
    })
  }
  render() {
    // if you cannot find this.state.search within todo.task, then do not return it
    // let filteredTodos = this.state.data.filter(todo => {
    //   return todo.task.indexOf(this.state.search) !== -1
    // })
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addItem={this.addItem}
        />
        <TodoList
          data={this.state.data}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
        <p>Number of Todos: {this.state.data.length}</p>
      </div>
    );
  }
}

export default App;
