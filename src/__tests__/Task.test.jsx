import React from 'react'
import Task from '../Task'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Task />', () => {
  it('should display done Task', () => {
    const props = {
      text: 'Task 1',
      id: 'some-id-1',
      done: true,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    }
    const wrappedComponent = shallow(<Task {...props} />)
    expect(wrappedComponent).toMatchSnapshot()
  })
  it('should display undone Task', () => {
    const props = {
      text: 'Task 1',
      id: 'some-id-1',
      done: false,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    }
    const wrappedComponent = shallow(<Task {...props} />)
    expect(wrappedComponent).toMatchSnapshot()
  })
  it('should update task on checkbox checked', () => {
    const props = {
      text: 'Task 1',
      id: 'some-id-1',
      done: false,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    }
    const wrappedComponent = shallow(<Task {...props} />)
    wrappedComponent.find('.list-item__checkbox').simulate('change')
    expect(props.onChange).toBeCalledWith('some-id-1')
  })
  it('should delete task', () => {
    const props = {
      text: 'Task 1',
      id: 'some-id-1',
      done: false,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    }
    const wrappedComponent = shallow(<Task {...props} />)
    wrappedComponent.find('.list-item__delete-btn').simulate('click')
    expect(props.onDelete).toBeCalledWith('some-id-1')
  })
})