import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function DashboardWidgetSummary({ title, total, sx, ...other }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3">{total}</Typography>
        <Typography variant="p">{title}</Typography>
      </Box>
    </Card>
  );
}

DashboardWidgetSummary.propTypes = {
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.any,
};
