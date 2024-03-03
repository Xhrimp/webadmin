import Grid from '@mui/system/Unstable_Grid/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

export default function OrderOption() {
  return (
    <Grid container spacing={2} xs={12} md={12}>
      <Grid md={3}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 140 },
          }}
        >
          <InputLabel>Shop</InputLabel>

          <Select
            //   value={filters.shop}
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

      <Grid md={3}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 140 },
          }}
        >
          <InputLabel>Status</InputLabel>

          <Select
            //   value={filters.shop}
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

      <Grid md={3}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 140 },
          }}
        >
          <InputLabel>Status Item</InputLabel>

          <Select
            //   value={filters.shop}
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

      <Grid md={3}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 140 },
          }}
        >
          <InputLabel>Filter By</InputLabel>

          <Select
            //   value={filters.shop}
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

      <Grid xs={4}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 210 },
          }}
        >
          <InputLabel>Sort By</InputLabel>

          <Select
            //   value={filters.shop}
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

      <Grid xs={4}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 210 },
          }}
        >
          <InputLabel>Contain</InputLabel>

          <Select
            //   value={filters.shop}
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

      <Grid xs={4}>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 210 },
          }}
        >
          <InputLabel>Đơn Mica</InputLabel>

          <Select
            //   value={filters.shop}
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
    </Grid>
  );
}
