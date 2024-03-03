import React from 'react';
import { useState } from 'react';
import { Grid, IconButton, InputAdornment, Paper } from '@mui/material';
import Iconify from '../../../components/iconify/iconify';
import TextField from '@mui/material/TextField';
import Image from '../../../components/image/image';
import Input from '@mui/material/Input';

export default function FaceCutLabel() {
  const [src, setSrc] = useState('');
  const [img, setImg] = useState('');
  const handleChange = (event) => {
    setSrc(event.target.value);
    setImg(<Image src={event.target.value} sx={{ width: '100%' }}></Image>);
  };

  return (
    <Grid container xs={12} md={12}>
      <Grid item xs={12} md={5}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <TextField
            fullWidth
            // value={filters.name}
            // onChange={handleFilterName}
            placeholder="Link Input"
            onChange={handleChange}
            value={src}
            sx={{ marginBottom: 5 }}
            inputProps={{
              color: 'black',
              border: 'black',
            }}
          />
          {img}
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid>
          <IconButton>
            <Iconify icon="oi:arrow-right" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>
        <Paper elevation={3} p={3}>
          <TextField
            fullWidth
            // value={filters.name}
            // onChange={handleFilterName}
            placeholder="Link Input"
            sx={{ marginBottom: 5 }}
            inputProps={{
              color: 'black',
              border: 'black',
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
