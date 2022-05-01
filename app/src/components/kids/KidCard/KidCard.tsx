import React from 'react';
import { Kid } from '../../../types/kids';
import { PopupButton } from '../../UI/Popup/PopupButton';
import { KidAvatar } from '../KidAvatar';
import { KidSkill } from '../KidSkill';
import styles from './KidCard.module.scss';

type Props = {
  kid: Kid;
};

export const KidCard = ({ kid }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__avatar}>
        <KidAvatar />
        <div className={styles.card__info}>
          <span className={styles.name}>{kid.name}</span>
          <span className={styles.position}>{kid.position}</span>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.skills__item}>
          <KidSkill skill="strength" value={kid.strength} />
        </div>
        <div className={styles.skills__item}>
          <KidSkill skill="agility" value={kid.agility} />
        </div>
        <div className={styles.skills__item}>
          <KidSkill skill="accuracy" value={kid.accuracy} />
        </div>
        <div className={styles.skills__item}>
          <KidSkill skill="intellect" value={kid.intellect} />
        </div>
        <div className={styles.skills__item}>
          <KidSkill skill="speed" value={kid.speed} />
        </div>
      </div>
      <div className={styles.button}>
        <PopupButton label="ВЗЯТЬ В КОМАНДУ" icon="check" />
      </div>
    </div>
  );
};
