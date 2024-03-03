'use client';

import Container from '@mui/material/Container';
import React from 'react';
import ShopeeChart from '../shopee-chart/shopee-chart';
import { _bookings } from '../../../../_mock';
import { useSettingsContext } from '../../../../components/settings';
import ShopeeChatTable from '../shopee-chat-table';

export default function ShopeeChatView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <ShopeeChart />
      <ShopeeChatTable
        title="Booking Details"
        tableData={_bookings}
        tableLabels={[
          { id: 'shop', label: 'Shop' },
          { id: 'title', label: 'Unread Count' },
          { id: 'variant', label: 'Last Message' },
          { id: 'api-status', label: 'API Status' },
          // { id: '' },
        ]}
      />

      <ShopeeChatTable
        title="Booking Details"
        tableData={_bookings}
        tableLabels={[
          { id: 'shop', label: 'Shop' },
          { id: 'title', label: 'Unread Count' },
          { id: 'variant', label: 'Last Message' },
          { id: 'api-status', label: 'API Status' },
          // { id: '' },
        ]}
      />
    </Container>
  );
}
