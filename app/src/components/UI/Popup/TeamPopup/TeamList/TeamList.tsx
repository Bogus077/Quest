import React from 'react';
import { ChartSquare } from '../../../../charts/ChartSquare';
import { KidCard } from '../../../../kids/KidCard';
import { kid1, kid2, chart1, chart2, chart3 } from './teamListMock';
import styles from './TeamList.module.scss';

export const TeamList = () => {
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
    </div>
  );
};
