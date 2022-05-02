import React from 'react';
import { ChartData } from '../../../types/charts';
import styles from './NumberChart.module.scss';

type Props = {
  data: ChartData;
};

export const NumberChart = ({ data }: Props) => {
  return (
    <div className={styles.chart}>
      {data.map((item, i) => (
        <div key={i} className={styles.row}>
          <span className={styles.title}>{item.x}</span>
          <span className={styles.value} style={{ color: item.color }}>
            {item.y}
          </span>
        </div>
      ))}
    </div>
  );
};
