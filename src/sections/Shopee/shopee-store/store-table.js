'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Iconify from '../../../components/iconify/iconify';

import Label from '../../../components/label';
import Scrollbar from '../../../components/scrollbar';
import { TableHeadCustom } from '../../../components/table';
import { usePopover } from '../../../components/custom-popover';

export default function StoreTable({ title, subheader, tableLabels, tableData, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'hidden', height: 460 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={tableLabels} />
            <TableBody>
              {tableData.map((row) => (
                <StoreTableRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
      <Divider sx={{ borderStyle: 'dashed' }} />
    </Card>
  );
}

StoreTable.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

function StoreTableRow({ row }) {
  const theme = useTheme();

  const lightMode = theme.palette.mode === 'light';

  const popover = usePopover();

  const [value, setValue] = useState(4);

  const banned = Math.floor(Math.random() * 10);

  return (
    <>
      <TableRow>
        <TableCell style={{ maxWidth: 40 }}>
          <IconButton color={popover.open ? 'inherit' : 'default'}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>

        <TableCell style={{ maxWidth: 40 }}>S{Math.floor(Math.random() * 10)}</TableCell>

        <TableCell>
          <ListItemText
            primary={row.customer.name}
            secondary={row.customer.phoneNumber}
            primaryTypographyProps={{ typography: 'body2', noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: 'span',
              typography: 'caption',
            }}
          />
        </TableCell>

        <TableCell style={{ maxWidth: 50, backgroundColor: '#f95f5f' }}>{banned}</TableCell>

        <TableCell style={{ maxWidth: 50 }}>{Math.floor(Math.random() * 5000)} /5000 </TableCell>

        <TableCell align="left" sx={{ pr: 1 }}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            readOnly
          />
        </TableCell>

        <TableCell style={{ maxWidth: 50 }}>{Math.floor(Math.random() * 10000)} đ</TableCell>

        <TableCell sx={{ pr: 1 }}>{Math.floor(Math.random() * 10000000)} đ </TableCell>

        <TableCell sx={{ pr: 1 }}>{Math.floor(Math.random() * 10000000)} đ </TableCell>

        <TableCell align="center" sx={{ pr: 1 }}>
          <Label
            variant={lightMode ? 'soft' : 'filled'}
            color={
              (row.status === 'Paid' && 'success') ||
              // (row.status === 'Pending' && 'warning') ||
              'error'
            }
          >
            {row.status ? row.status : '-'}
          </Label>
        </TableCell>

        <TableCell align="center" sx={{ pr: 1 }}>
          {' '}
          <Label
            variant={lightMode ? 'soft' : 'filled'}
            color={
              (row.status === 'Paid' && 'success') ||
              // (row.status === 'Pending' && 'warning') ||
              'error'
            }
          >
            {row.status ? row.status : '-'}
          </Label>
        </TableCell>

        <TableCell align="center" sx={{ pr: 1 }}>
          23 days
        </TableCell>
      </TableRow>
    </>
  );
}

StoreTableRow.propTypes = {
  row: PropTypes.object,
};
