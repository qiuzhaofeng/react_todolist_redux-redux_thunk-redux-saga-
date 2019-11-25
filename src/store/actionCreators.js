import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, TODO_LIST_DATA, TODO_LIST_DATA_SAGA } from './actionTypes.js'
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})
export const getDelItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
export const getTodoListDataAction0 = (data) => ({
  type: TODO_LIST_DATA,
  data
})
export const getTodoListDataAction = () => {
  return (dispatch) => {
    setTimeout(()=> {
      const data = ["dell", "qwer", "qwerdfab"]
      const action = getTodoListDataAction0(data)
      dispatch(action)
    },1000)
  }
}
export const getTodoListDataActionSaga = () => ({
  type: TODO_LIST_DATA_SAGA
})