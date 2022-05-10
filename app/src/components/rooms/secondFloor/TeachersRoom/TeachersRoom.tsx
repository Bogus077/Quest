import React, { useState } from 'react';
import styles from './TeachersRoom.module.scss';
import { Door } from '../../../objects/Door';
import background from './teachersRoom.jpg';
import { roomLinks } from '../../../../utils/roomLinks';
import { Prealoader } from '../../../UI/Preloader';
import { CompetitionsDesk } from '../../../objects/CompetitionsDesk';
import { Popup } from '../../../UI/Popup';
import { CompetitionsPopup } from '../../../UI/Popup/CompetitionsPopup';

export const TeachersRoom = () => {
  const [competitionPopupVisible, setCompetitionPopupVisible] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Prealoader />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Door left="32%" top="8.5%" to={roomLinks.hall2ndRight.link} />
        <div onClick={() => setCompetitionPopupVisible(true)}>
          <CompetitionsDesk left="12%" top="10%" />
        </div>
      </div>
      {competitionPopupVisible && (
        <Popup
          isPopupOpen={setCompetitionPopupVisible}
          isOpened={competitionPopupVisible}
        >
          <CompetitionsPopup isPopupOpen={setCompetitionPopupVisible} />
        </Popup>
      )}
    </div>
  );
};
