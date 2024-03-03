'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

import DashboardOption from '../dashboard-option';
import DashboardSearch from '../dashboard-search';
import DashboardOverview from '../dashboard-overview';
import DashboardAreaChart from '../dashboard-chart/dashboard-area-chart';
import DashboardTable from '../dashboard-table';
import DashboardSummary from '../dashboard-summary';

export default function DashboardView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Dashboard
      </Typography>
      <Grid container mb={4}>
        <Grid item xs={12} md={5}>
          <DashboardOption />
        </Grid>
        <Grid item xs={12} md={7}>
          <DashboardSearch />
        </Grid>
      </Grid>
      <Grid>
        <DashboardOverview />
      </Grid>
      <DashboardAreaChart />
      <DashboardSummary />
      <DashboardTable
        title="Booking Details"
        tableData={_bookings}
        tableLabels={[
          { id: 'image', label: 'Image' },
          { id: 'title', label: 'Title' },
          { id: 'variant', label: 'Variant' },
          { id: 'sales', label: 'Sales' },
          { id: 'orders', label: 'Orders' },
          // { id: '' },
        ]}
      />
    </Container>
  );
}
