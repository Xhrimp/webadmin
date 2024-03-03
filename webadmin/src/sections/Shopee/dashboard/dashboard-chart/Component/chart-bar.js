import PropTypes from 'prop-types';

import Chart, { useChart } from '../../../../../components/chart';

// ----------------------------------------------------------------------

export default function ChartBar({ series, xAxis }) {
  const chartOptions = useChart({
    stroke: { show: false },
    plotOptions: {
      bar: { horizontal: true, barHeight: '30%' },
    },
    xAxis: {
      categories: xAxis,
    },
  });

  return (
    <Chart
      dir="ltr"
      type="bar"
      series={[{ data: series }]}
      options={chartOptions}
      width="100%"
      height={320}
    />
  );
}

ChartBar.propTypes = {
  series: PropTypes.array,
  xAxis: PropTypes.array,
};
