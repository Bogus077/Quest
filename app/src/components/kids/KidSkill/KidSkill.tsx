import React from 'react';
import { Icon } from '../../UI/Icon';
import { SkillProgress } from '../SkillProgress';
import styles from './KidSkill.module.scss';

type Props = {
  skill: 'intellect' | 'accuracy' | 'speed' | 'agility' | 'strength';
  value: number;
};

export const KidSkill = ({ skill, value }: Props) => {
  let skillTitle = 'Интеллект';
  switch (skill) {
    case 'accuracy':
      skillTitle = 'Меткость';
      break;
    case 'speed':
      skillTitle = 'Скорость';
      break;
    case 'agility':
      skillTitle = 'Ловкость';
      break;
    case 'strength':
      skillTitle = 'Сила';
      break;
    case 'intellect':
    default:
      skillTitle = 'Интеллект';
      break;
  }

  return (
    <div className={styles.skill}>
      <div className={styles.skill__icon}>
        <Icon icon={skill} />
      </div>
      <span className={styles.skill__title}>{skillTitle}</span>
      <div className={styles.skill__progress}>
        <SkillProgress value={value} />
      </div>
    </div>
  );
};
