import { Tabs } from "../models/tab";
import { ITodo } from "../models/todo";

export const filterTodoListByStatus = (todoList: ITodo[], filterStatus: Tabs) => {
  if (filterStatus === Tabs.All) return todoList;
  const isChecked = filterStatus === Tabs.Closed;
  console.log(isChecked, filterStatus, Tabs.Closed);
  
  return todoList.filter(todo => (todo.completed === isChecked));
};
