import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateUser(this.state)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form className='Form' onSubmit={this.handleSubmit} >
        <input
          type='text'
          placeholder='github user'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button>Get User</button>
      </form>
    )
  }
}

export default Form;