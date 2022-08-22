import { all, put, call, takeLatest } from "typed-redux-saga";
import { fetchTodoList } from "../../api/todo";
import { ITodo } from "../../models/todo";
import { fetchTodoSuccess, fetchTodoFailure, fetchTodoStart } from "../actionCreators";
import actionTypes from "../actionTypes";
import { AxiosResponse } from "axios";


function* todoWorker() {
  try {
    yield put(fetchTodoStart())
    const response: AxiosResponse<ITodo[]> = yield call(fetchTodoList);
    yield put(fetchTodoSuccess(response.data))
  } catch(e) {
    yield put(fetchTodoFailure(e as Error))
  }
}

function* todoWatcher() {
  yield all([takeLatest(actionTypes.FETCH_TODO, todoWorker)])
}

export default todoWatcher;
