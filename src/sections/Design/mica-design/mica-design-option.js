import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export default function MicaDesignOption({
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
      <Grid item xs={12} md={6}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
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

      <Grid item xs={12} md={6}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
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

      <Grid item xs={12} md={6}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
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

      <Grid item xs={12} md={6}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
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

MicaDesignOption.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  roleOptions: PropTypes.array,
  stockOptions: PropTypes.array,
};
