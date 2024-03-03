'use client';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from '../../../components/iconify/iconify';
import Button from '@mui/material/Button';

export default function ScannerSearch() {
  return (
    <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
      <TextField
        sx={{ mr: 4, width: '80%' }}
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
      <Button color="info" variant="contained" sx={{ mr: 4, width: '20%', height: '100%' }}>
        Scan
      </Button>
    </Stack>
  );
}
