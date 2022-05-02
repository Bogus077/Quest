import React from 'react';
import { KidCard } from '../../../../kids/KidCard';
import styles from './AddKidList.module.scss';

export const AddKidList = () => {
  const kid1 = {
    name: 'Иванов Иван',
    position: 'кадет',
    strength: 2,
    agility: 3,
    accuracy: 0,
    intellect: 1,
    speed: 2,
  };

  const kid2 = {
    name: 'Петров Пётр',
    position: 'мл. сержант',
    strength: 5,
    agility: 2,
    accuracy: 1,
    intellect: 2,
    speed: 3,
  };

  return (
    <div className={styles.list}>
      <div className={styles.list__item}>
        <KidCard
          kid={kid1}
          buttonText="ВЗЯТЬ В КОМАНДУ"
          buttonIcon="check"
          onButtonClick={() => {}}
        />
      </div>
      <div className={styles.list__item}>
        <KidCard
          kid={kid2}
          buttonText="ВЗЯТЬ В КОМАНДУ"
          buttonIcon="check"
          onButtonClick={() => {}}
        />
      </div>
    </div>
  );
};
