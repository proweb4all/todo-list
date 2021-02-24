import React from 'react'
import TasksList from '../TasksList'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<TasksList />', () => {
  it('should display todolist', () => {
    const wrappedComponent = shallow(<TasksList />)
    expect(wrappedComponent.find('.todo-list').exists()).toBeTruthy()
  })
})