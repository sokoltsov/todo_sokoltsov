import axios from './axios';

export const fetchTodoList = () => {
  return axios.get('/todos');
}
