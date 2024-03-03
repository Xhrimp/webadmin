import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export default function PhoneCaseDesignOption({
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
    <Grid container spacing={2} xs={12} md={12}>
      <Grid item xs={12} md={3}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 150 },
          }}
        >
          <InputLabel>Search By</InputLabel>

          <Select
            // value={filters.shop}
            input={<OutlinedInput label="Search By" />}
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

      <Grid item xs={12} md={3}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 150 },
          }}
        >
          <InputLabel>Filter By</InputLabel>

          <Select
            // value={filters.productType}
            input={<OutlinedInput label="Filter By" />}
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

      <Grid item xs={12} md={4}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 210 },
          }}
        >
          <InputLabel>Shop</InputLabel>

          <Select
            // value={filters.productType}
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

      <Grid item xs={12} md={2}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 100 },
          }}
        >
          <InputLabel>Status</InputLabel>

          <Select
            // value={filters.productType}
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
    </Grid>
  );
}

PhoneCaseDesignOption.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  roleOptions: PropTypes.array,
  stockOptions: PropTypes.array,
};
