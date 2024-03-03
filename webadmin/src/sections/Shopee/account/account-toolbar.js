'use client';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import React from 'react';
import Iconify from '../../../components/iconify/iconify';

function AccountToolbar() {
  return (
    <Grid container spacing={2} xs={12} md={12} marginBottom={4}>
      <Grid md={9}>
        <TextField
          fullWidth
          // value={filters.name}
          // onChange={handleFilterName}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid md={1}></Grid>

      <Grid md={2}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
          }}
        >
          <InputLabel>Shop</InputLabel>

          <Select
            //   value={filters.shop}
            input={<OutlinedInput label="Shop" />}
            // renderValue={(selected) => selected}
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

export default AccountToolbar;
