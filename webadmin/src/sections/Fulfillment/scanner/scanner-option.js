import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';

import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Switch } from '@mui/material';

// ----------------------------------------------------------------------

export default function ScannerOption({
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
          <InputLabel>Search By</InputLabel>

          <Select
            // value={filters.search-by}
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

      <Grid xs={12} md={4} style={{ display: 'flex', alignItems: 'center' }}>
        <Switch defaultChecked color={'primary'} style={{ scale: '1.5' }} />
        <Typography variant="p">Auto Print</Typography>
      </Grid>

      <Grid xs={12} md={4} style={{ display: 'flex', alignItems: 'center' }}>
        <Switch defaultChecked color={'primary'} style={{ scale: '1.5' }} />
        <Typography variant="p">Check Note</Typography>
      </Grid>
    </Grid>
  );
}

ScannerOption.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  roleOptions: PropTypes.array,
  stockOptions: PropTypes.array,
};
