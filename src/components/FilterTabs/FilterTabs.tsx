import React, { useCallback, useEffect, useState } from 'react';
import TabButton from '../TabButton/TabButton';
import { ITodo } from '../../models/todo';
import { ITab, Tabs } from '../../models/tab';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateFilteredTodoList } from '../../app/actionCreators';
import styles from './filterTabs.module.css';

interface IProps {
  todoList: ITodo[];
  tabList: ITab[];
  children: (filteredTodoList: ITodo[]) => React.ReactNode;
}

const FilterTabs = ({ todoList, tabList, children }: IProps) => {
  const [filterStatus, setFilterStatus] = useState<Tabs>(Tabs.All);
  const handleClick = useCallback((id: Tabs) => {
    setFilterStatus(id);
  }, [])
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateFilteredTodoList(filterStatus));
  }, [todoList, filterStatus, dispatch]);

  const filteredTodoList = useAppSelector(state => state.todoReducer.filteredTodoList)

  return (
    <>
      <header className={styles.header}>
        {
          tabList.map(tab => (
            <TabButton
              key={tab.id}
              onClick={handleClick}
              tab={tab}
              active={tab.id === filterStatus}
            />
          ))
        }
      </header>
      {children(filteredTodoList)}
    </>
  );
}

export default FilterTabs;
