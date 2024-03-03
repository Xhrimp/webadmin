import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export default function PhonecasePodOption({
  filters,
  onFilters,
  //
  stockOptions,
  roleOptions,
}) {
  //   const handleCloseStock = useCallback(() => {
  //     onFilters('stock', stock);
  //   }, [onFilters, stock]);

  return (
    <Grid container xs={12} md={12}>
      <Grid xs={12} md={4}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 140 },
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

      <Grid xs={12} md={4}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 140 },
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

      <Grid xs={12} md={4}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 140 },
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
    </Grid>
  );
}

PhonecasePodOption.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  roleOptions: PropTypes.array,
  stockOptions: PropTypes.array,
};
