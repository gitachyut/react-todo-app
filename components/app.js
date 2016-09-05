import _ from 'lodash';
import React from 'react';
import Todolist from './Todolist';
import Createtodo from './createtodo';
const  todos=[
  {
    task :"i need to bath",
    isCompleted : false
  },

  {
    task :"i need to dinner",
    isCompleted : true
  },

  {
    task :"i need to sleep",
    isCompleted : false
  }
];
export default class App extends React.Component{



  constructor(props){
    super(props);
    this.state={
      todos
    }

  };
  render(){
    return (
      <div>
        <h1> React ToDo App </h1>
        <Createtodo createTodo ={this.createTodo.bind(this)} />
        <Todolist todos = {this.state.todos}
                  toggleTask = {this.toggleTask.bind(this)}
                  saveTask = {this.saveTask.bind(this)}
                  deletetask ={this.deletetask.bind(this)}
        />
      </div>
    )
  };

   createTodo(task){
     this.state.todos.push({
       task,
       isCompleted : false
     });
     this.setState({
       todos : this.state.todos
     })
   }

   toggleTask(task){
     const foundtask = _.find(this.state.todos , todo =>
        todo.task === task
     );
     foundtask.isCompleted = !foundtask.isCompleted;
     this.setState({
       todos : this.state.todos
     })
   }
   saveTask(oldTask,newTask){
    //  console.log(newTask);console.log(oldTask);
     const foundtask = _.find(this.state.todos , todo =>
        todo.task === oldTask
     );
     foundtask.task = newTask;
     this.setState({
       todos : this.state.todos
     })
   }

   deletetask(task){
     _.remove(this.state.todos , todo =>
        todo.task === task
     );
     this.setState({
       todos : this.state.todos
     })
   }

}
