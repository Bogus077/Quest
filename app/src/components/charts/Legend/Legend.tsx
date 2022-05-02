import React from 'react';
import { ChartData } from '../../../types/charts';
import styles from './Legend.module.scss';

type Props = {
  data: ChartData;
};

export const Legend = ({ data }: Props) => {
  return (
    <div className={styles.legend}>
      {data.map((item, i) => (
        <div key={i} className={styles.legend__item}>
          <div
            className={styles.legend__color}
            style={{ backgroundColor: item.color }}
          >
            {item.y}
          </div>
          <span className={styles.legend__label}>{item.x}</span>
        </div>
      ))}
    </div>
  );
};
