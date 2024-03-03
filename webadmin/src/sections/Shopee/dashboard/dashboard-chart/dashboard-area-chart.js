'use client';

import React from 'react';
import ChartSplineArea from './Component/chart-spline-area';

export default function DashboardAreaChart() {
  return (
    <ChartSplineArea
      series={[
        { name: 'Profit', data: [100, 51, 28, 51, 42, 109, 100] },
        { name: 'Revenue', data: [11, 32, 45, 32, 34, 52, 41] },
        { name: 'BaseCost', data: [31, 40, 42, 109, 32, 45, 100] },
        { name: 'ADS Cost', data: [28, 51, 42, 32, 34, 52, 41] },
        { name: 'Orders', data: [31, 40, 28, 51, 32, 34, 52] },
        { name: 'Sales', data: [40, 28, 40, 32, 34, 52, 41] },
      ]}
      xAxis={{
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      }}
    />
  );
}
