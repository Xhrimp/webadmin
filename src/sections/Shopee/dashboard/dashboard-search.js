'use client';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from '../../../components/iconify/iconify';

export default function DashboardSearch() {
  return (
    <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
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
    </Stack>
  );
}
