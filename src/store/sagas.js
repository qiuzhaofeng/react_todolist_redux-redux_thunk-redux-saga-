import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { TODO_LIST_DATA_SAGA } from './actionTypes.js'
import { getTodoListDataAction0 } from './actionCreators.js'
import store from './index'
function* mySaga() {
  yield takeEvery(TODO_LIST_DATA_SAGA, fetchUser);
}
function* fetchUser() {
  try {
    // 模拟异步
    function demo() {
      let check = [];
      let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
          check = ["1","2","3"]
          resolve(check);
        }, 3000);
      });
      return promise;
    }
    console.log(1)
    demo().then((res)=>{
      console.log(res,2)
    })
    console.log(3)
    const data = yield demo()
    console.log(4)
    console.log(data, 5)
    console.log(6)
    const action = getTodoListDataAction0(data)
    yield put(action)
  }catch(e) {
    console.log("error") 
  }
}
function fetchUser1() {
  try {
    // 模拟异步
    function demo() {
      let check = [];
      let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
          check = ["1", "2", "3"]
          resolve(check);
        }, 3000);
      });
      return promise;
    }
    demo().then((res) => {
      console.log(res, 2)
      const action = getTodoListDataAction0(res)
      store.dispatch(action)
    })
  } catch (e) {
    console.log("error")
  }
}
export default mySaga;