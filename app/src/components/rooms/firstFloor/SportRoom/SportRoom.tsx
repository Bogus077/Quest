import React from 'react';
import styles from './SportRoom.module.scss';
import { Door } from '../../../objects/Door';
import background from './sportRoom.jpg';
import { roomLinks } from '../../../../utils/roomLinks';
import { Prealoader } from '../../../UI/Preloader';
import { Mat } from '../../../objects/Mat';

export const SportRoom = () => {
  return (
    <div className={styles.wrapper}>
      <Prealoader />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Mat left="27.4%" top="21.3%" />
        <Mat left="15.5%" top="31%" blue={true} />
        <Mat left="3.5%" top="40.7%" />

        <Mat left="39.3%" top="31%" blue={true} />
        <Mat left="27.5%" top="40.7%" />
        <Mat left="15.5%" top="50.3%" blue={true} />

        <Mat left="51.3%" top="40.7%" />
        <Mat left="39.5%" top="50.3%" blue={true} />
        <Mat left="27.5%" top="60%" />

        <Door
          left="67.5%"
          top="72%"
          to={roomLinks.hall2nd.link}
          mirrored={true}
        />
      </div>
    </div>
  );
};
