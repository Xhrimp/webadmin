'use client';

import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FaceCutLabel from '../face-cut-label';

import { _bookings } from '../../../../_mock';
import { useSettingsContext } from '../../../../components/settings';
export default function FaceCutView() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Face Cut
      </Typography>
      <FaceCutLabel />
    </Container>
  );
}
