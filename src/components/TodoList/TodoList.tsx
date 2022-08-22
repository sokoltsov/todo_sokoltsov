import React, { useCallback, useState } from 'react';
import CheckboxField from '../CheckboxField/CheckboxField';
import { ITodo } from '../../models/todo';
import FilterTabs from '../FilterTabs/FilterTabs';
import { tabs } from '../../constants/filterTabs';

const todoListInit: ITodo[] = [
  {
    id: 1,
    title: 'working',
    checked: false,
  },
  {
    id: 2,
    title: 'sleeping',
    checked: false,
  },
  {
    id: 3,
    title: 'buying',
    checked: false,
  },
  {
    id: 4,
    title: 'cooking',
    checked: false,
  },
]

const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>(todoListInit);

  const handleCheck = useCallback((id: number) => {
    setTodoList(todoList.map(todo => (
      todo.id === id ? {...todo, checked: !todo.checked} : todo
    )))
  }, [todoList])

  return (
    <>
      <FilterTabs
        todoList={todoList}
        tabList={tabs}
      >
        {(filteredTodoList) => (
          <ul>
            {
              filteredTodoList.map(({id, title, checked}) => {
                return (
                  <li key={id}>
                    <CheckboxField
                      id={id}
                      title={title}
                      checked={checked}
                      onCheck={handleCheck}
                    />
                  </li>
                );
              })
            }
          </ul>
        )}
      </FilterTabs>
    </>
  );
}

export default TodoList;
