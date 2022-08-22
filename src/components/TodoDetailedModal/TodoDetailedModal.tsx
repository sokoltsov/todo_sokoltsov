import React from 'react';
import { tabNames } from '../../constants/filterTabs';
import { Tabs } from '../../models/tab';
import { ITodo } from '../../models/todo';
import CheckboxField from '../CheckboxField/CheckboxField';
import Modal from '../Modal/Modal';
import styles from './todoDetailedModal.module.css';

interface IProps {
  task: ITodo;
  onClose: () => void;
  onCheck: (id: number) => void;
}

const TodoDetailedModal =({ task, onClose, onCheck }: IProps)=> {
  return (
    <Modal
      title={`Task#${task.id}`}
      onClose={onClose}
    >
      {task.title}
      <div className={styles.footer}>
        <CheckboxField
          id={task.id}
          title=''
          checked={task.completed}
          onCheck={onCheck}
        />
        <span>{ task.completed ? tabNames[Tabs.Closed] : tabNames[Tabs.Opened] }</span>
      </div>
    </Modal>
  )
}

export default TodoDetailedModal;
