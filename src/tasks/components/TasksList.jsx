import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({ tasks, onChangeCheck, onDeleteTask }) => {
  return (
    <ul className='list' tasks={tasks}>
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
          onChange={onChangeCheck}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string
    }),
  ).isRequired,
  onChangeCheck: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
}

export default TasksList;
