import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

interface IProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal =({ title, onClose, children }: IProps)=> {
  return ReactDOM.createPortal(    
    <div className={styles.modal}>
      <h4>{title}</h4>
      <button onClick={onClose}>Close</button>
      {children}
    </div>,
    document.body)
}

export default Modal;
