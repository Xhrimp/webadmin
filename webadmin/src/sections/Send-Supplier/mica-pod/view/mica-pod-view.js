'use client';

import React from 'react';
import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

import MicaPodSearch from '../mica-pod-search';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MicaPodOption from '../mica-pod-option';
import MicaPodTable from '../mica-pod-table';

export default function MicaPodView() {
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
        <Grid xs={12} md={8}>
          <MicaPodSearch />
        </Grid>
        {/* <Grid md={1}></Grid> */}
        <Grid xs={12} md={4}>
          <MicaPodOption />
        </Grid>
      </Grid>
      <MicaPodTable
        title=""
        tableData={_bookings}
        tableLabels={[
          { id: 'order-id', label: 'Order ID' },
          { id: 'qr-code', label: 'QR Code' },
          { id: 'shop', label: 'Shop' },
          { id: 'status', label: 'Status' },
          { id: 'created', label: 'Created' },
          { id: 'actions', label: 'Actions' },
          // { id: '' },
        ]}
      />
    </Container>
  );
}
