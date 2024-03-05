'use client';

import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import StoreOverview from '../store-overview';
import StoreTable from '../store-table';

import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

export default function ShopeeStoreView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <StoreOverview />
      <Grid mb={5}></Grid>
      <StoreTable
        title="Booking Details"
        tableData={_bookings}
        tableLabels={[
          { id: '', label: '' },
          { id: 'shop', label: 'Shop' },
          { id: 'account-health', label: 'Account Health' },
          { id: 'products-banned', label: 'Products Banned' },
          { id: 'products', label: 'Products' },
          { id: 'rating', label: 'Review Rating' },
          { id: 'ads-balance', label: 'Ads Balance' },
          { id: 'wallet-balance', label: 'Wallet Balance' },
          { id: 'wallet-pending', label: 'Wallet Pending' },
          { id: 'api-status', label: 'API Status' },
          { id: 'cookie-status', label: 'Coookie Status' },
          { id: 'last-update', label: 'Last Update' },
        ]}
      />
    </Container>
  );
}
