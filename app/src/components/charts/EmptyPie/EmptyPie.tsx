import React, { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';
import { ChartData } from '../../../types/charts';

type Props = {
  data: ChartData;
};

export const EmptyPie = ({ data }: Props) => {
  const [chartData, setChartData] = useState([{ y: 0 }]);
  useEffect(() => setChartData(data), [data]);

  return (
    <div>
      <VictoryPie
        animate={{
          duration: 200,
        }}
        padAngle={3}
        padding={10}
        labelRadius={155}
        width={180}
        height={140}
        innerRadius={35}
        style={{
          data: { fill: ({ datum }) => datum.color },
        }}
        data={chartData}
      />
    </div>
  );
};
