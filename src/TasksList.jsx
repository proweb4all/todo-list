import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends Component {
  state = {
    tasks: [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Send message', done: true, id: 2 },
      { text: 'Visit party', done: false, id: 3 },
      { text: 'Visit doctor', done: false, id: 4 },
      { text: 'Buy meat', done: false, id: 5 }
    ]
  }
  onCreate = text => {
    this.setState({
      tasks: [
        ...this.state.tasks, 
        { text, done: false, id: Math.random() }
      ]
    })
  }
  onChangeCheck = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      } else {
        return task
      }
    })
    this.setState({tasks: newTasks})
  }
  onDeleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks})
  }

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done)
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className='list' tasks={this.tasks}>
          {sortedList.map(task => (
            <Task 
              key={task.id} 
              {...task} 
              onChange={this.onChangeCheck}
              onDelete={this.onDeleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
