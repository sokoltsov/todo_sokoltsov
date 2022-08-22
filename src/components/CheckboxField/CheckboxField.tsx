import React from 'react';
import classNames from 'classnames';
import styles from './checkboxField.module.css';

interface IProps {
  id: number;
  title: string;
  checked: boolean;
  onCheck: (id: number) => void;
  onClick?: (id: number) => void;
}

const CheckboxField = ({ id, title, checked, onCheck, onClick }: IProps) => {
  return (
    <div className={styles.field}>
      <input
        type="checkbox"
        name={`todo${id}`}
        checked={checked}
        onChange={() => onCheck(id)}
        className={styles.checkbox}
      />
      <label
        htmlFor={`todo${id}`}
        className={classNames({ [ styles.checkedTodo ]: checked }, styles.label)}
        onClick={() => onClick ? onClick(id) : null}
      >{ title }</label>
    </div>
  );
}

export default CheckboxField;
