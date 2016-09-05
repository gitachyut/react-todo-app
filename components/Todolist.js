import _ from 'lodash';
import React from 'react';
import Todoheader from './Todoheader';
import Todolistitem from './Todolistitem'
export default class Todolist extends React.Component{

  renderItems(){
    const props = _.omit(this.props,'todos')
    return _.map(this.props.todos, function(todo, index){
        return <Todolistitem key={index} {...todo} {...props} />
    });
  }
  render(){
    return (
        <table>
          < Todoheader />
          <tbody>
            { this.renderItems() }
          </tbody>
        </table>
    )
  }
}
