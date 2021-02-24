import React from 'react'
import TodoList from '../TodoList'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<TodoList />', () => {
  it('should display TasksList', () => {
    const wrappedComponent = shallow(<TodoList />)
    expect(wrappedComponent.find('TasksList').exists()).toBeTruthy()
  })
})