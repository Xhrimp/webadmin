'use client';

import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import React from 'react';
import StoreWidgetSummary from './store-widget-summary';

export default function StoreOverview() {
  const theme = useTheme();

  return (
    <Grid container spacing={2} xs={12} md={12} mt={3}>
      <Grid xs={12} md={3} mr={4}>
        <StoreWidgetSummary title="Total Active Users" total={18765} />
      </Grid>
      {/* <Grid md={1}></Grid> */}
      <Grid xs={12} md={3} mr={4}>
        <StoreWidgetSummary title="Total Installed" total={4876} />
      </Grid>
    </Grid>
  );
}
