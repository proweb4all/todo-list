import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import * as tasksAction from '../tasks.actions'
import { sortedTasksListSelector } from './../tasks.selectors';


class TodoList extends Component {
  componentDidMount() {
    this.props.getTaskList()
  }

  render() {
    return (
      <>
        <h1 className="title">Todo list</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            onChangeCheck={this.props.updateTask}
            onDeleteTask={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
}

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state)
  }
}

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
}

export default connect(mapState, mapDispatch)(TodoList);
