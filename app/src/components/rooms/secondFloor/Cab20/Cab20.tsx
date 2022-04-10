import React from 'react';
import styles from './Cab20.module.scss';
import { Door } from '../../../objects/Door';
import background from './Cab20.jpg';
import { roomLinks } from '../../../../utils/roomLinks';
import { Prealoader } from '../../../UI/Preloader';

export const Cab20 = () => {
  return (
    <div className={styles.wrapper}>
      <Prealoader />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Door left="46%" top="63.5%" to={roomLinks.hall2nd.link} />
        <Door
          left="16%"
          top="34.5%"
          to={roomLinks.cab20a.link}
          mirrored={true}
        />
      </div>
    </div>
  );
};
