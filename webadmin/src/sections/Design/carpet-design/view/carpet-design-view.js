'use client';

import React from 'react';
import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PodDesignTable from '../carpet-design-table';
import CarpetDesignOption from '../carpet-design-option';
import CarpetDesignSearch from '../carpet-design-search';
import CarpetDesignTable from '../carpet-design-table';
export default function CarpetDesignView() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Carpet Design
      </Typography>
      <Grid container xs={12} md={12} sx={{ mb: 4 }}>
        <Grid xs={12} md={8}>
          <CarpetDesignSearch />
        </Grid>
        {/* <Grid md={1}></Grid> */}
        <Grid xs={12} md={4}>
          <CarpetDesignOption />
        </Grid>
      </Grid>
      <CarpetDesignTable
        title=""
        tableData={_bookings}
        tableLabels={[
          { id: 'image', label: 'Image' },
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
