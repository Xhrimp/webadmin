'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { _bookings } from '../../../../_mock';

import { useSettingsContext } from '../../../../components/settings';

import OrderOption from '../orders-option';
import OrdersSearch from '../orders-search';
import OrdersTable from '../orders-table';

export default function OrderView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Orders
      </Typography>
      <Grid container spacing={5} sx={{ mb: 4 }}>
        <Grid xs={12} md={5}>
          <OrdersSearch />
        </Grid>
        <Grid xs={12} md={7}>
          <OrderOption />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <OrdersTable
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
      </Grid>
    </Container>
  );
}
