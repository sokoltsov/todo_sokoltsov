import React, { useCallback, useMemo, useState } from 'react';
import TabButton from '../TabButton/TabButton';
import { ITodo } from '../../models/todo';
import { ITab, Tabs } from '../../models/tab';
import { filterTodoListByStatus } from '../../utils/filterUtils';

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

  const filteredTodoList = useMemo(() => {
    return filterTodoListByStatus(todoList, filterStatus)
  }, [todoList, filterStatus])

  return (
    <>
      <header>
        {
          tabList.map(tab => (
            <TabButton 
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
