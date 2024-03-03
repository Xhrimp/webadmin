'use client';

import React from 'react';
import { useSettingsContext } from '../../../../components/settings';
import { _bookings } from '../../../../_mock';

import PodDesignSearch from '../pod-design-search';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PodDesignOption from '../pod-design-option';
import PodDesignTable from '../pod-design-table';

export default function PodDesignView() {
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
        <Grid xs={12} md={8}>
          <PodDesignSearch />
        </Grid>
        <Grid xs={12} md={4}>
          <PodDesignOption />
        </Grid>
      </Grid>
      <PodDesignTable
        title=""
        tableData={_bookings}
        tableLabels={[
          { id: 'image', label: 'Image' },
          { id: 'title', label: 'Title' },
          { id: 'shop', label: 'Shop' },
          { id: 'link-design', label: 'Link Design' },
          { id: 'note-design', label: 'Note Design' },
          { id: 'actions', label: 'Actions' },
          // { id: '' },
        ]}
      />
    </Container>
  );
}
