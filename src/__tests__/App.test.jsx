import React from 'react'
import App from '../App'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should display Todo List', () => {
    const wrappedComponent = shallow(<App />)
    expect(wrappedComponent.find('TodoList').exists()).toBeTruthy()
  })
})