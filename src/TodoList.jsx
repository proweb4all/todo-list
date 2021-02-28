import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

class TodoList extends Component {
  state = {
    tasks: []
  }
  componentDidMount() {
    this.fetchTasks()
  }
  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({ tasks: tasksList })
    })
  }
  onCreate = text => {
    const newTask = {
      text,
      done: false,
      createDate: new Date().toISOString()
    }
    createTask(newTask).then(this.fetchTasks)
  }
  onChangeCheck = id => {
    const { done, text, createDate } = this.state.tasks.find(task => task.id === id)
    const updatedTask = {
      text,
      createDate,
      done: !done
    }
    updateTask(id, updatedTask).then(this.fetchTasks)
  }
  onDeleteTask = id => {
    deleteTask(id).then(this.fetchTasks)
  }

  render() {
    return (
      <>
        <h1 className='title'>Todo list</h1>
        <div className="todo-list">
          <CreateTaskInput onCreate={this.onCreate} />
          <TasksList
            tasks={this.state.tasks}
            onChangeCheck={this.onChangeCheck}
            onDeleteTask={this.onDeleteTask}
          />
        </div>
      </>
    );
  }

}

export default TodoList;
