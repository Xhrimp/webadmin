import PropTypes from 'prop-types';

import Chart, { useChart } from '../../../../../components/chart';

// ----------------------------------------------------------------------

export default function ChartColumnStacked({ series, xAxis }) {
  console.log(xAxis);
  const chartOptions = useChart({
    chart: {
      type: 'bar',
      stacked: true,
      zoom: {
        enabled: true,
      },
    },
    legend: {
      itemMargin: {
        vertical: 8,
      },
      position: 'right',
      offsetY: 20,
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
      },
    },
    stroke: {
      show: true,
    },
    xaxis: {
      categories: xAxis,
    },
    fill: {
      opacity: 1,
    },
  });

  return (
    <Chart dir="ltr" type="bar" series={series} options={chartOptions} width="100%" height={320} />
  );
}

ChartColumnStacked.propTypes = {
  series: PropTypes.array,
  xAxis: PropTypes.array,
};
