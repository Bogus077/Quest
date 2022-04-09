import React from 'react';
import styles from './Cab20.module.scss';
import { Door } from '../../../objects/Door';
import { GreenDesk } from '../../../objects/GreenDesk';
import { ClassDesk } from '../../../objects/ClassDesk';
import background from '../Cab20/Cab20.jpg';
import { roomLinks } from '../../../../utils/roomLinks';

export const Cab20a = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <GreenDesk left="23%" top="17%" />

        <ClassDesk left="45%" top="23%" />
        <ClassDesk left="33%" top="33%" />
        <ClassDesk left="20%" top="44%" />

        <ClassDesk left="55%" top="33%" />
        <ClassDesk left="43%" top="43%" />
        <ClassDesk left="30%" top="54%" />

        <ClassDesk left="65%" top="41%" />
        <ClassDesk left="53%" top="51%" />
        <ClassDesk left="40%" top="62%" />

        <Door
          left="51.5%"
          top="64%"
          to={roomLinks.cab20.link}
          mirrored={true}
        />
      </div>
    </div>
  );
};
