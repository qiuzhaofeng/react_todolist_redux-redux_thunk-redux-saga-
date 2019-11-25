import React, { Component } from 'react';
import store from './store'
import TodolistUI from './TodolistUI.js'
import { getInputChangeAction, getAddItemAction, getDelItemAction, getTodoListDataAction, getTodoListDataActionSaga } from './store/actionCreators.js'
import { get } from 'https';
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    // redux-thunk
    // const action = getTodoListDataAction()
    // store.dispatch(action)
    
    // redux-saga
    console.log("aaa")
    const action = getTodoListDataActionSaga()
    console.log("bbb")
    store.dispatch(action)
  }
  render() {
    return (
    <TodolistUI 
      inputValue={this.state.inputValue}
      handleInputChange = { this.handleInputChange }
      handleBtnClick = { this.handleBtnClick }
      list = { this.state.list }
      handleItemClick = { this.handleItemClick }
    />)
  }
  handleStoreChange = () => {
    this.setState(store.getState())
  } 
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleBtnClick=()=> {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemClick(index) {
    const action = getDelItemAction(index)
    store.dispatch(action)
  }
 }
 export default Todolist;
