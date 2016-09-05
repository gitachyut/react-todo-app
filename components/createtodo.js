import React from 'react';

export default class Createtodo extends React.Component{

  render(){

    return (
        <form onSubmit={this.handleCreate.bind(this)}>
          <input type="text" placeholder="what i want to do" id="todo" />
          <button>Create </button>
        </form>
    )
  };
  handleCreate(e){
    e.preventDefault();
    if(e.target.todo.value!=''){
        this.props.createTodo(e.target.todo.value);
    }
    e.target.todo.value='';
  }

}
