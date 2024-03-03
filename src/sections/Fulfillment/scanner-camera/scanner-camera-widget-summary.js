import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function ScannerCamWidgetSummary({ content, sx, ...other }) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        {content.map((item) => (
          <Typography variant="h5" ml={10} mb={1}>
            {item.title}: {item.infor}
          </Typography>
        ))}
      </Box>
    </Card>
  );
}

ScannerCamWidgetSummary.propTypes = {
  content: PropTypes.any,
};
