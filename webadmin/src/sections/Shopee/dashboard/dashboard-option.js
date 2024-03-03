import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Stack } from '@mui/system';

// ----------------------------------------------------------------------

export default function DashboardOption() {
  return (
    <Stack direction="row" useFlexGap flexWrap="wrap" spacing={2}>
      <Grid item xs={12} md={5}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
          }}
        >
          <InputLabel>Shop</InputLabel>

          <Select
            // value={filters.shop}
            input={<OutlinedInput label="Shop" />}
            renderValue={(selected) => selected}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: 240 },
              },
            }}
          >
            {/* {roleOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={5}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
          }}
        >
          <InputLabel>Product Type</InputLabel>

          <Select
            // value={filters.productType}
            input={<OutlinedInput label="Product Type" />}
            renderValue={(selected) => selected}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: 240 },
              },
            }}
          >
            {/* {roleOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={5}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
          }}
        >
          <InputLabel>Status</InputLabel>

          <Select
            // value={filters.Status}
            input={<OutlinedInput label="Status" />}
            renderValue={(selected) => selected}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: 240 },
              },
            }}
          >
            {/* {roleOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={5}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
          }}
        >
          <InputLabel>Select Field</InputLabel>

          <Select
            // value={filters.selectField}
            input={<OutlinedInput label="Select Field" />}
            renderValue={(selected) => selected}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: 240 },
              },
            }}
          >
            {/* {roleOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
      </Grid>
    </Stack>
  );
}

DashboardOption.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  roleOptions: PropTypes.array,
  stockOptions: PropTypes.array,
};
