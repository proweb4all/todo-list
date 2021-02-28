import React from 'react'
import TodoList from '../TodoList'
import {fetchTasksList, deleteTask} from '../tasksGateway'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('../tasksGateway', () => {
  return {
    createTask: jest.fn(),
    updateTask: jest.fn(),
    deleteTask: jest.fn(() => Promise.resolve()),
    fetchTasksList: jest.fn(() => Promise.resolve([])),
  }
})
describe('<TodoList />', () => {
  it('should request tasks list', () => {
    shallow(<TodoList />)
    expect(fetchTasksList).toBeCalled()
  });
  it('should handle task delete', () => {
    const wrappedComponent = shallow(<TodoList />)
    const deleteHandler = wrappedComponent.find('TasksList').prop('onDeleteTask')
    deleteHandler('some-id')
    expect(deleteTask).toBeCalledWith('some-id')
  })
})