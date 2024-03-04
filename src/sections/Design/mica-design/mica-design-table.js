import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import { IconButton } from '@mui/material';

import { TableHeadCustom } from '../../../components/table';
import { usePopover } from '../../../components/custom-popover';
import Scrollbar from '../../../components/scrollbar';
import Iconify from '../../../components/iconify/iconify';

export default function MicaDesignTable({ title, subheader, tableLabels, tableData, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'hidden', height: 460 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={tableLabels} />
            <TableBody>
              {tableData.map((row) => (
                <MicaDesignTableRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
      <Divider sx={{ borderStyle: 'dashed' }} />
    </Card>
  );
}

MicaDesignTable.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

function MicaDesignTableRow({ row }) {
  const theme = useTheme();

  const lightMode = theme.palette.mode === 'light';

  const popover = usePopover();

  return (
    <>
      <TableRow>
        <TableCell>
          <Avatar
            variant="rounded"
            alt={row.destination.name}
            src={row.destination.coverUrl}
            sx={{ position: 'static', mr: 2, width: 48, height: 48 }}
          />
        </TableCell>

        <TableCell style={{ minWidth: 400 }}>
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

        <TableCell style={{ maxWidth: 100 }}>CODE</TableCell>

        <TableCell style={{ maxWidth: 50 }}>
          <IconButton color={popover.open ? 'inherit' : 'default'}>
            <Iconify icon="ic:baseline-edit" />
          </IconButton>
        </TableCell>

        <TableCell style={{ maxWidth: 50 }}>
          <IconButton color={popover.open ? 'inherit' : 'default'}>
            <Iconify icon="typcn:delete" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

MicaDesignTableRow.propTypes = {
  row: PropTypes.object,
};
