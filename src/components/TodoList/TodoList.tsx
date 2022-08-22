import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CheckboxField from '../CheckboxField/CheckboxField';
import FilterTabs from '../FilterTabs/FilterTabs';
import { tabs } from '../../constants/filterTabs';
import TodoDetailedModal from '../TodoDetailedModal/TodoDetailedModal';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { checkTodo, fetchTodo } from '../../app/actionCreators';
import styles from './todoList.module.css';

const TodoList = () => {
  const todoList = useAppSelector(state => state.todoReducer.todoList)
  const [selectedTodoId, setSelectedTodoId] = useState<number|undefined>();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch])

  const handleCheck = useCallback((id: number) => {
    dispatch(checkTodo(id));
  }, [dispatch])

  const handleClick = useCallback((id: number) => {
    setSelectedTodoId(id);
    setOpen(true);
  }, [])

  const handleClose = () => {
    setOpen(false);
  };

  const selectedTodo = useMemo(() => {
    return todoList.find(task => task.id === selectedTodoId);
  }, [todoList, selectedTodoId])

  return (
    <>
      <h1 className={styles.title}>TODO</h1>
      <FilterTabs
        todoList={todoList}
        tabList={tabs}
      >
        {(filteredTodoList) => (
          <ul className={styles.list}>
            {
              filteredTodoList.map(({id, title, completed}) => {
                return (
                  <li key={id} className={styles.listItem}>
                    <CheckboxField
                      id={id}
                      title={title}
                      checked={completed}
                      onCheck={handleCheck}
                      onClick={handleClick}
                    />
                  </li>
                );
              })
            }
          </ul>
        )}
      </FilterTabs>
      {open && selectedTodo && <TodoDetailedModal 
        task={selectedTodo}
        onClose={handleClose}
        onCheck={handleCheck}
      />}
    </>
  );
}

export default TodoList;
