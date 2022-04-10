import React from 'react';
import styles from './HallRight.module.scss';
import { Door } from '../../../objects/Door';
import compClass from './hallRight.jpg';
import { Prealoader } from '../../../UI/Preloader';

export const HallRight = () => {
  return (
    <div className={styles.wrapper}>
      <Prealoader />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${compClass})` }}
      >
        <Door left="50%" top="32.2%" to="/" />
        <Door left="65%" top="44.5%" to="/" />
      </div>
    </div>
  );
};
