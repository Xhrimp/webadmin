'use client';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import React from 'react';
import DashboardWidgetSummary from './widget-summary/dashboard-widget-summary';

export default function DashboardOverview() {
  const price = Math.floor(Math.random() * 1000000);
  return (
    <Grid container item spacing={2} xs={12} md={12} mt={3}>
      <Grid item xs={12} md={3}>
        <DashboardWidgetSummary
          title="Revenue"
          total={Math.floor(Math.random() * 100000000) + ' đ'}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <DashboardWidgetSummary title="ADS Cost" total={Math.floor(Math.random() * 10000) + ' đ'} />
      </Grid>
      <Grid item xs={12} md={3}>
        <DashboardWidgetSummary
          title="BaseCost"
          total={Math.floor(Math.random() * 100000000) + ' đ'}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <DashboardWidgetSummary
          title="Profit"
          total={Math.floor(Math.random() * 100000000) + ' đ'}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <DashboardWidgetSummary title="Orders" total={Math.floor(Math.random() * 1000)} />
      </Grid>
      <Grid item xs={12} md={3}>
        <DashboardWidgetSummary title="Sales" total={Math.floor(Math.random() * 1000)} />
      </Grid>
      <Grid item xs={12} md={3}>
        <DashboardWidgetSummary
          title="Miss Basecost Products"
          total={Math.floor(Math.random() * 1000)}
        />
      </Grid>
    </Grid>
  );
}
