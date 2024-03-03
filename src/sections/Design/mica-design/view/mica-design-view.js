'use client';

import React from 'react';
import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

import PodDesignSearch from '../mica-design-search';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MicaDesignTable from '../mica-design-table';
import MicaDesignOption from '../mica-design-option';

export default function MicaDesignView() {
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
        <Grid xs={12} md={7} mr={3}>
          <PodDesignSearch />
        </Grid>
        {/* <Grid md={1}></Grid> */}
        <Grid xs={12} md={4}>
          <MicaDesignOption />
        </Grid>
      </Grid>
      <MicaDesignTable
        title=""
        tableData={_bookings}
        tableLabels={[
          { id: 'image', label: 'Image' },
          { id: 'title', label: 'Title' },
          { id: 'shop', label: 'Shop' },
          { id: 'action', label: 'Action' },
          { id: 'block', label: 'Block' },
          // { id: '' },
        ]}
      />
    </Container>
  );
}
