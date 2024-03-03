import PropTypes from 'prop-types';

import Chart, { useChart } from '../../../../../components/chart';

// ----------------------------------------------------------------------

export default function ChartSplineArea({ series, xAxis }) {
  const chartOptions = useChart({
    chart: {
      type: 'area',
      height: 350,
      // toolbar: {
      //   show: true,
      //   tools: {
      //     zoom: true,
      //     zoomin: true,
      //     zoomout: true,
      //     pan: true,
      //     reset: true,
      //   },
      // },
    },
    legend: {
      itemMargin: {
        vertical: 8,
      },
      position: 'right',
      offsetY: 20,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: xAxis,
    tooltip: {
      x: {
        format: 'DD/MM/YYYY HH:mm',
      },
    },
  });

  return (
    <Chart dir="ltr" type="area" series={series} options={chartOptions} width="100%" height={400} />
  );
}

ChartSplineArea.propTypes = {
  series: PropTypes.array,
  xAxis: PropTypes.any,
};
