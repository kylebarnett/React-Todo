import React from 'react';

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
          <input
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="Add Todo..."
            type="text"
          />
        </form>
      </>
    )
  }
}

export default TodoForm