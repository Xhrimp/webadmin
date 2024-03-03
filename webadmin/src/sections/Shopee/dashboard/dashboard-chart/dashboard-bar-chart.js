import React from 'react';
import ChartBar from './Component/chart-bar';

export default function DashboardBarChart() {
  return (
    <ChartBar
      series={[400, 430, 448, 470, 540, 580, 690]}
      xAxis={['S1', 'S1', 'S1', 'S1', 'S1', 'S1', 'S1']}
    />
  );
}
