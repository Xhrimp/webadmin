'use client';

import React from 'react';
import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

import ScannerCameraSearch from '../scanner-camera-search';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ScannerCameraTable from '../scanner-camera-table';
import { Checkbox } from '@mui/material';
import ScannerCamWidgetSummary from '../scanner-camera-widget-summary';

export default function ScannerCameraView() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        POD Design
      </Typography>
      <Grid container xs={12} md={12} sx={{ mb: 4 }}>
        <ScannerCameraSearch />
      </Grid>
      <Grid mb={5}>
        <ScannerCamWidgetSummary
          content={[
            { title: 'Tracking Number', infor: 'None' },
            { title: 'Order ID', infor: 'None' },
            { title: 'Count Mica', infor: 0 },
            { title: 'Count Items', infor: 0 },
            { title: 'Status', infor: 'None' },
          ]}
        />
      </Grid>
      <ScannerCameraTable
        title=""
        tableData={_bookings}
        tableLabels={[
          { id: 'preview', label: 'Preview' },
          { id: 'variant', label: 'Variant' },
          // { id: '' },
        ]}
      />
    </Container>
  );
}
