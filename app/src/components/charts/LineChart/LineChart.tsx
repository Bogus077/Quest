import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { ChartData } from '../../../types/charts';

type Props = {
  data: ChartData;
};

export const LineChart = ({ data }: Props) => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        style={{
          data: { stroke: '#ff6633' },
          labels: { fontSize: 40 },
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 },
        ]}
      />
    </VictoryChart>
  );
};
