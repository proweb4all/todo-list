import React from 'react'
import TasksList from '../TasksList'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<TasksList />', () => {
  it('should display todolist', () => {
    const props = {
      onChangeCheck: jest.fn(), 
      onDeleteTask: jest.fn(),
      tasks: [
        {text: 'Task 1', done: true, id: 'task-id-1'},
        {text: 'Task 2', done: false, id: 'task-id-2'},
        {text: 'Task 3', done: true, id: 'task-id-3'},
      ], 
    }
    const wrappedComponent = shallow(<TasksList {...props} />)
    expect(wrappedComponent).toMatchSnapshot()
  })
})