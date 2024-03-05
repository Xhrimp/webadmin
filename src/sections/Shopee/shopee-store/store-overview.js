'use client';
import React from 'react';

import Grid from '@mui/material/Grid';
import StoreWidgetSummary from './store-widget-summary';

export default function StoreOverview() {
  return (
    <Grid container spacing={2} xs={12} md={12} mt={3}>
      <Grid xs={12} md={3} mr={4}>
        <StoreWidgetSummary title="Total Active Users" total={18765} />
      </Grid>
      <Grid xs={12} md={3} mr={4}>
        <StoreWidgetSummary title="Total Installed" total={4876} />
      </Grid>
    </Grid>
  );
}
