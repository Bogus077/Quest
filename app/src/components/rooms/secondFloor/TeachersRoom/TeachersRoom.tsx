import React from 'react';
import styles from './TeachersRoom.module.scss';
import { Door } from '../../../objects/Door';
import background from './teachersRoom.jpg';
import { roomLinks } from '../../../../utils/roomLinks';
import { Prealoader } from '../../../UI/Preloader';

export const TeachersRoom = () => {
  return (
    <div className={styles.wrapper}>
      <Prealoader />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Door left="32%" top="8.5%" to={roomLinks.hall2ndRight.link} />
      </div>
    </div>
  );
};
