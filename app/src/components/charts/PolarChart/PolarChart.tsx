import React from 'react';
import {
  VictoryArea,
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory';
import { ChartData } from '../../../types/charts';

type Props = {
  data: ChartData;
};

export const PolarChart = ({ data }: Props) => {
  return (
    <VictoryChart polar theme={VictoryTheme.material}>
      <VictoryArea
        data={data}
        style={{ data: { fill: '#ff6633' } }}
        animate={{
          duration: 200,
        }}
      />
      <VictoryPolarAxis
        labelPlacement="vertical"
        style={{
          tickLabels: { fontSize: 25, padding: 11 },
        }}
        padding={100}
      />
    </VictoryChart>
  );
};
