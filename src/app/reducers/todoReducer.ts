import ActionTypes from "../types";
import actionTypes from "../actionTypes";
import { ITodo } from "../../models/todo";
import { filterTodoListByStatus } from "../../utils/filterUtils";

interface IState {
  todoList: ITodo[];
  filteredTodoList: ITodo[];
  isFetching: boolean;
  error: Error | null;
};

const initialState: IState = {
  todoList: [] as ITodo[],
  filteredTodoList: [] as ITodo[],
  error: null,
  isFetching: false,
}

export default function todoReducer(state: IState = initialState, action: ActionTypes) {
  switch (action.type) {
    case actionTypes.FETCH_TODO_START:
      return {
        ...state,
        error: null,
        isFetching: true,
      }
    case actionTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        todoList: action.payload,
      }
    case actionTypes.FETCH_TODO_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    case actionTypes.CHECK_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => (
          todo.id === action.id ? {...todo, completed: !todo.completed} : todo
        )),
      }
    case actionTypes.UPDATE_FILTERED_TODO_LIST:
      return {
        ...state,
        filteredTodoList: filterTodoListByStatus(state.todoList, action.filterStatus),
      }
    default:
      return state
  }
}