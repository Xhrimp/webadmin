'use client';

import React from 'react';
import ChartColumnStacked from './Component/chart-column-stacked';

function ShopeeChart() {
  return (

    <ChartColumnStacked
      series={[
        { name: '< 6h', data: [15, 3, 0, 0] },
        { name: '6h - 10h', data: [0, 0, 1] },
        { name: '10h - 12h', data: [0, 0, 1, 1] },
        { name: '12h - 1d', data: [0, 0, 0, 1] },
        { name: '1d - 2d', data: [] },
        { name: '> 2d', data: [] },
      ]}
      xAxis={['S1', 'S1', 'S1', 'S1']}
    />
  );
}

export default ShopeeChart;
