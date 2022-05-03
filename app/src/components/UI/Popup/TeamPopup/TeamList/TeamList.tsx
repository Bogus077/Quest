import React from 'react';
import { ChartSquare } from '../../../../charts/ChartSquare';
import { KidCard } from '../../../../kids/KidCard';
import { chart1, chart2, chart3 } from './teamListMock';
import styles from './TeamList.module.scss';
import { useTypedSelector } from '../../../../../redux';
import { getTeamKids } from '../../../../../redux/teamSlice';

export const TeamList = () => {
  const teamKids = useTypedSelector(getTeamKids);
  return (
    <div className={styles.team}>
      <div className={styles.info}>
        <div className={styles.info__item}>
          <ChartSquare
            type={chart1.type}
            data={chart1.data}
            header={chart1.header}
          />
        </div>
        <div className={styles.info__item}>
          <ChartSquare
            type={chart2.type}
            data={chart2.data}
            header={chart2.header}
          />
        </div>
        <div className={styles.info__item}>
          <ChartSquare
            type={chart3.type}
            data={chart3.data}
            header={chart3.header}
          />
        </div>
      </div>
      <span className={styles.subheader}>Состав команды</span>
      <div className={styles.list}>
        {teamKids.map((kid) => (
          <div key={kid.id} className={styles.list__item}>
            <KidCard
              kid={kid}
              buttonText="ВЗЯТЬ В КОМАНДУ"
              buttonIcon="check"
              onButtonClick={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
