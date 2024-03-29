import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { fNumber } from '../../../utils/format-number';

// ----------------------------------------------------------------------

export default function StoreWidgetSummary({ title, total, sx, ...other }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h3">{fNumber(total)}</Typography>
      </Box>
    </Card>
  );
}

StoreWidgetSummary.propTypes = {
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
