import { inferLiteralFromString } from "./typeUtils"
import actionTypes from "../actionTypes";
import { ITodo } from "../../models/todo";
import { Tabs } from "../../models/tab";

export function fetchTodo() {
  return { type: inferLiteralFromString( actionTypes.FETCH_TODO ) };
}

export function fetchTodoStart() {
  return { type: inferLiteralFromString( actionTypes.FETCH_TODO_START ) };
}

export function fetchTodoSuccess(data: ITodo[]) {
  return { type: inferLiteralFromString( actionTypes.FETCH_TODO_SUCCESS ), payload: data };
}

export function fetchTodoFailure(error: Error) {
  return { type: inferLiteralFromString( actionTypes.FETCH_TODO_FAILED ), payload: error };
}

export function checkTodo(id: number) {
  return { type: inferLiteralFromString( actionTypes.CHECK_TODO ), id };
}

export function updateFilteredTodoList(filterStatus: Tabs) {
  return { type: inferLiteralFromString( actionTypes.UPDATE_FILTERED_TODO_LIST ), filterStatus };
}
