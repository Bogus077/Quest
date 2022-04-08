import React from 'react';
import styles from './CompClass.module.scss';
import { Door } from '../../../objects/Door';
import compClass from './compClass.jpg';

export const CompClass = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${compClass})` }}
      >
        <Door left="58%" top="76%" to="/" />
      </div>
    </div>
  );
};
