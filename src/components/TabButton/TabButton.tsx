import React from 'react';
import classNames from 'classnames';
import { ITab } from '../../models/tab';
import styles from './tabButton.module.css';


interface IProps {
  tab: ITab;
  active: boolean;
  onClick: (id: number) => void;
}

const TabButton = ({ tab: {id, title}, active, onClick }: IProps) => {

  const handleClick = () => {
    onClick(id);
  }

  return (
    <button
      className={classNames({ [styles.activeTab]: active }, styles.button)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default TabButton;
