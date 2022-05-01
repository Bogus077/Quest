import React, { useState } from 'react';
import styles from './Hall.module.scss';
import { roomLinks } from '../../../../utils/roomLinks';
import { Door } from '../../../objects/Door';
import { WallPaper } from '../../../objects/WallPaper';
import { PlatPlace } from '../../../objects/PlatPlace';
import { Prealoader } from '../../../UI/Preloader';
import { GoArrow } from '../../../objects/GoArrow';
import background from './hall.jpg';
import { Popup } from '../../../UI/Popup';
import { TeamPopup } from '../../../UI/Popup/TeamPopup';

export const Hall = () => {
  const [teamPopupVisible, setTeamPopupVisible] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Prealoader />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Door left="44.2%" top="12.3%" to={roomLinks.compClass.link} />
        <Door left="88%" top="45%" to={roomLinks.cab20.link} />
        <WallPaper left="50.5%" top="16%" />
        <WallPaper left="63%" top="25%" />
        <WallPaper left="75.5%" top="34.5%" />
        <div onClick={() => setTeamPopupVisible(true)}>
          <PlatPlace left="21.2%" top="42.2%" />
        </div>
        <PlatPlace left="35%" top="53%" />
        <PlatPlace left="50%" top="64%" />
        <GoArrow left="75%" top="64%" to={roomLinks.hall2ndRight.link} />
        <GoArrow
          left="25%"
          top="27%"
          to={roomLinks.sportRoom.link}
          mirrored={true}
        />
      </div>
      {teamPopupVisible && (
        <Popup isPopupOpen={setTeamPopupVisible} isOpened={teamPopupVisible}>
          <TeamPopup isPopupOpen={setTeamPopupVisible} />
        </Popup>
      )}
    </div>
  );
};
