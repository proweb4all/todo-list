import React from 'react'
import CreateTaskInput from '../CreateTaskInput'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<CreateTaskInput />', () => {
  it('should display CreateTaskInput', () => {
    const wrappedComponent = shallow(<CreateTaskInput />)
    expect(wrappedComponent.find('.create-task').exists()).toBeTruthy()
  })
  it('should create Task on submit', () => {
    const mockOnCreate = jest.fn()
    const wrappedComponent = shallow(<CreateTaskInput onCreate={mockOnCreate} />)
    const fakeEvent = {target: {value: 'Visit a doctor'}}
    wrappedComponent.find('.create-task__input').simulate('change', fakeEvent)
    wrappedComponent.find('.create-task__btn').simulate('click')
    expect(mockOnCreate).toBeCalledWith('Visit a doctor')
  })
  it('should clear Input on submit', () => {
    const mockOnCreate = jest.fn()
    const wrappedComponent = shallow(<CreateTaskInput onCreate={mockOnCreate} />)
    const fakeEvent = {target: {value: 'Visit a doctor'}}
    wrappedComponent.find('.create-task__input').simulate('change', fakeEvent)
    wrappedComponent.find('.create-task__btn').simulate('click')
    expect(wrappedComponent.find('.create-task__input').prop('value')).toEqual('')
  })
})