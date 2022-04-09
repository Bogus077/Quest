import React from 'react';
import styles from './Hall.module.scss';
import { roomLinks } from '../../../../utils/roomLinks';
import { Door } from '../../../objects/Door';
import { WallPaper } from '../../../objects/WallPaper';
import { PlatPlace } from '../../../objects/PlatPlace';
import background from './hall.jpg';

export const Hall = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Door left="44.2%" top="12.3%" to={roomLinks.compClass.link} />
        <Door left="88%" top="45%" />
        <WallPaper left="50.5%" top="16%" />
        <WallPaper left="63%" top="25%" />
        <WallPaper left="75.5%" top="34.5%" />
        <PlatPlace left="21.2%" top="42.2%" />
        <PlatPlace left="35%" top="53%" />
        <PlatPlace left="50%" top="64%" />
      </div>
    </div>
  );
};
