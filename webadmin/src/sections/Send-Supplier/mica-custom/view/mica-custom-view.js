'use client';

import React from 'react';
import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

import MicaCustomSearch from '../mica-custom-search';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MicaCustomOption from '../mica-custom-option';
import MicaCustomTable from '../mica-custom-table';

export default function MicaCustomView() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Custom Design
      </Typography>
      <Grid container xs={12} md={12} sx={{ mb: 4 }}>
        <Grid xs={12} md={6}>
          <MicaCustomSearch />
        </Grid>
        {/* <Grid md={1}></Grid> */}
        <Grid xs={12} md={6}>
          <MicaCustomOption />
        </Grid>
      </Grid>
      <MicaCustomTable
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
