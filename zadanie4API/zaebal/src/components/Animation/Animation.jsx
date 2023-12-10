import React from 'react';
import styles from './Animation.module.scss';
const Animation = props => {
  return (
    <>
      <button>Кликни, чтобы увидеть уведомление</button>
      <div className={styles.moveWindow}>
        Это выезжающее сообщение!
        <button>Закрыть</button>
      </div>
    </>
  );
};

export default Animation;
