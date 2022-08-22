import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../../assets/icons8-close.svg';
import styles from './modal.module.css';

interface IProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal =({ title, onClose, children }: IProps)=> {
  return ReactDOM.createPortal(
    <>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <h4 className={styles.header}>{title}</h4>
        <button onClick={onClose} className={styles.closeButton}>
          <img src={CloseIcon} alt="Close" />
        </button>
        {children}
      </div>
    </>,
    document.body)
}

export default Modal;
