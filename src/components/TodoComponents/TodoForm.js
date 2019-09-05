import React from 'react';
import { Input } from 'semantic-ui-react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: ''
    }
  }

  handleChange = event => {
    this.setState({
      todo: event.target.value
    })
  }

  submitItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.todo)
    this.setState({
      todo: ''
    })
  }
  render() {
    return (
      <>
        <form onSubmit={this.submitItem}>
          <Input
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="Add Todo..."
            type="text"
          />
          {/* <Input
            value={this.props.search}
            onChange={this.props.searchTodos}
            placeholder="Search Todos..."
            type="text"
          /> */}
          <button>Add Todo</button>
        </form>
      </>
    )
  }
}

export default TodoForm