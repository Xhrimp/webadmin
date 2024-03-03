'use client';

import React from 'react';
import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PodDesignTable from '../phonecase-design-table';
import PhoneCaseDesignOption from '../phonecase-design-option';
import PhoneCaseDesignSearch from '../phonecase-design-search';
import PhoneCaseDesignTable from '../phonecase-design-table';
export default function PhoneCaseDesignView() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        POD Design
      </Typography>
      <Grid container xs={12} md={12} sx={{ mb: 4 }}>
        <Grid xs={12} md={6}>
          <PhoneCaseDesignSearch />
        </Grid>
        {/* <Grid md={1}></Grid> */}
        <Grid xs={12} md={6}>
          <PhoneCaseDesignOption />
        </Grid>
      </Grid>
      <PhoneCaseDesignTable
        title=""
        tableData={_bookings}
        tableLabels={[
          { id: 'image', label: 'Image' },
          { id: 'design-key', label: 'Design Key' },
          { id: 'shop', label: 'Shop' },
          { id: 'item-id', label: 'Item ID' },
          { id: 'title', label: 'Title' },
          { id: 'action', label: 'Action' },
          { id: 'block', label: 'Block' },
        ]}
      />
    </Container>
  );
}
