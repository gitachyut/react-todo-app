import React from 'react';

export default class Todolistitem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isEditing : false
    };
  }
  renderTasksection(){
    const { task,isCompleted } = this.props;
    var taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor:'pointer'
    };
    if(this.state.isEditing){
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} id="editInput" />
          </form>
        </td>
      );
    }
    return(
        <td style={taskStyle}
            onClick={this.props.toggleTask.bind(this,task)}
        >{ task }</td>
    );
  }
  renderActionSection(){
    if(this.state.isEditing ){
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cencel</button>
        </td>
      );
    }
    return(
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deletetask.bind(this,this.props.task)}>Delete</button>
      </td>
    );
  }
  render(){
    return (
            <tr>
              {this.renderTasksection()}
              {this.renderActionSection()}
            </tr>
    );
  }
  onEditClick(){
    this.setState({isEditing : true})
  }
 onCancelClick(){
   this.setState({isEditing : false})
 }
 onSaveClick(e){
   e.preventDefault();
  // console.log(document.getElementById('editInput').value);
   const oldTask = this.props.task;
   const newTask = document.getElementById('editInput').value;
   this.props.saveTask( oldTask,newTask);
   this.setState({isEditing : false})
 }


}
