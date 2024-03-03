import Grid from '@mui/material/Grid';
import React from 'react';
import DashboardBarChart from './dashboard-chart/dashboard-bar-chart';
import { Typography } from '@mui/material';

export default function DashboardSummary() {
  return (
    <Grid container>
      <Grid item md={4}>
        <Typography variant="h6">Dashboard</Typography>
        <DashboardBarChart />
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6">Dashboard</Typography>
        <DashboardBarChart />
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6">Dashboard</Typography>
        <DashboardBarChart />
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6">Dashboard</Typography>
        <DashboardBarChart />
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6">Dashboard</Typography>
        <DashboardBarChart />
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6">Dashboard</Typography>
        <DashboardBarChart />
      </Grid>
    </Grid>
  );
}
