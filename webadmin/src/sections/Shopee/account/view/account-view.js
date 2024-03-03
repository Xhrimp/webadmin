'use client';
import { _bookings } from '../../../../_mock';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import AccountToolbar from '../account-toolbar';
import AccountTable from '../account-table';
import { useSettingsContext } from '../../../../components/settings';

export default function AccountView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Account
      </Typography>
      <AccountToolbar />
      <AccountTable
        title="Account"
        tableData={_bookings}
        tableLabels={[
          { id: 'image', label: 'Image' },
          { id: 'title', label: 'Title' },
          { id: 'variant', label: 'Variant' },
          { id: 'sales', label: 'Sales' },
          { id: 'orders', label: 'Orders' },
        ]}
      />
    </Container>
  );
}
