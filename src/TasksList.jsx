import React, { Component } from 'react';

class TasksList extends Component {
  state = {
    tasks: []
  }
  render() {
    return (
      <>
        <ul class='list'>TasksList</ul>
      </>
    );
  }
}

export default TasksList;
