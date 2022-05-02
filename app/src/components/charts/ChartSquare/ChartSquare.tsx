import React from 'react';
import styles from './ChartSquare.module.scss';
import { EmptyPie } from '../EmptyPie';
import { ChartData, ChartTypes } from '../../../types/charts';
import { Legend } from '../Legend';
import { NumberChart } from '../NumberChart';
import { PolarChart } from '../PolarChart';
import { LineChart } from '../LineChart';

type Props = {
  type: ChartTypes;
  data: ChartData;
  header: string;
};

export const ChartSquare = ({ type, data, header }: Props) => {
  const getChart = () => {
    switch (type) {
      case 'emptyPie':
        return <EmptyPie data={data} />;
      case 'numberChart':
        return <NumberChart data={data} />;
      case 'polar':
        return <PolarChart data={data} />;
      case 'line':
        return <LineChart data={data} />;
      default:
        return <></>;
    }
  };
  return (
    <div className={styles.chart}>
      <span className={styles.chart__header}>{header}</span>

      <div className={styles.chart__item}>{getChart()}</div>
      {type === 'emptyPie' && (
        <div className={styles.chart__legend}>
          <Legend data={data} />
        </div>
      )}
    </div>
  );
};
