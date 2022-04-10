import React from 'react';
import styles from './HallRight.module.scss';
import { Door } from '../../../objects/Door';
import compClass from './hallRight.jpg';
import { Prealoader } from '../../../UI/Preloader';
import { GoArrow } from '../../../objects/GoArrow';
import { roomLinks } from '../../../../utils/roomLinks';

export const HallRight = () => {
  return (
    <div className={styles.wrapper}>
      <Prealoader />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${compClass})` }}
      >
        <Door left="50%" top="32.2%" to={roomLinks.teachersRoom.link} />
        <Door left="65%" top="44.5%" to={roomLinks.press.link} />
        <Door left="89%" top="44.5%" />
        <GoArrow
          left="30%"
          top="21%"
          mirrored={true}
          to={roomLinks.hall2nd.link}
        />
      </div>
    </div>
  );
};
