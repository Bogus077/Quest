import React from 'react';
import styles from './CompClass.module.scss';
import { Door } from '../../../objects/Door';
import { ComputerDesk } from '../../../objects/ComputerDesk';
import { roomLinks } from '../../../../utils/roomLinks';
import background from './compClass.jpg';

export const CompClass = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <ComputerDesk left="8%" top="37%" />
        <ComputerDesk left="19%" top="46%" />
        <ComputerDesk left="30%" top="55%" />
        <ComputerDesk left="41%" top="64%" />
        <ComputerDesk left="52%" top="73%" />

        <ComputerDesk left="30%" top="15%" />
        <ComputerDesk left="41%" top="24%" />
        <ComputerDesk left="52%" top="33%" />
        <ComputerDesk left="63%" top="42%" />
        <ComputerDesk left="74%" top="51%" />

        <ComputerDesk left="85%" top="60%" />
        <ComputerDesk left="77%" top="66%" />

        <Door left="58%" top="76%" to={roomLinks.hall2nd.link} />
      </div>
    </div>
  );
};
