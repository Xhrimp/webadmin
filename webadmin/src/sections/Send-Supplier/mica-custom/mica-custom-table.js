import React from 'react';

import PropTypes, { func } from 'prop-types';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

import Scrollbar from '../../../components/scrollbar';
import { TableHeadCustom } from '../../../components/table';
import { usePopover } from '../../../components/custom-popover';
import { Button, IconButton, TextField } from '@mui/material';
import TextArea from '../../../components/text-area/text-area';
import Iconify from '../../../components/iconify/iconify';

export default function MicaCustomTable({ title, subheader, tableLabels, tableData, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'hidden', height: 460 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={tableLabels} />
            <TableBody>
              {tableData.map((row) => (
                <MicaCustomTableRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      <Divider sx={{ borderStyle: 'dashed' }} />

      {/* <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
        >
          View All
        </Button>
      </Box> */}
    </Card>
  );
}

MicaCustomTable.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

function MicaCustomTableRow({ row }) {
  const theme = useTheme();

  const lightMode = theme.palette.mode === 'light';

  const handleDownload = () => {
    popover.onClose();
    console.info('DOWNLOAD', row.id);
  };

  const handlePrint = () => {
    popover.onClose();
    console.info('PRINT', row.id);
  };

  const handleShare = () => {
    popover.onClose();
    console.info('SHARE', row.id);
  };

  const handleDelete = () => {
    popover.onClose();
    console.info('DELETE', row.id);
  };

  const date = new Date();

  return (
    <>
      <TableRow>
        <TableCell style={{ maxWidth: 30 }}>240227KN4MD76F</TableCell>

        <TableCell style={{ maxWidth: 100 }}>QR Code</TableCell>

        <TableCell style={{ maxWidth: 100 }}>Shop</TableCell>

        <TableCell style={{ maxWidth: 100 }}>Status</TableCell>

        <TableCell style={{ maxWidth: 150 }}></TableCell>

        <TableCell style={{ maxWidth: 100 }}>
          <Button color="success">Assign</Button>
        </TableCell>
      </TableRow>
      <MicaCustomSubRow row={row} />
    </>
  );
}

MicaCustomTableRow.propTypes = {
  row: PropTypes.object,
};

function MicaCustomSubRow({ row }) {
  const popover = usePopover();

  return (
    <>
      <TableRow>
        <TableCell style={{ maxWidth: 30 }}>
          <Avatar
            variant="rounded"
            alt={row.destination.name}
            src={row.destination.coverUrl}
            sx={{ position: 'static', mr: 2, width: 100, height: 100 }}
          />
        </TableCell>
        <TableCell style={{ maxWidth: 150 }}>
          <ListItemText
            primary={row.customer.name}
            secondary={row.customer.phoneNumber}
            primaryTypographyProps={{ typography: 'body2', noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: 'span',
              typography: 'caption',
            }}
            sx={{ mb: 2 }}
          />
          <TextArea />
        </TableCell>
        <TableCell style={{ maxWidth: 100 }}>
          <TextArea placeholder="Part Time Note" />
        </TableCell>
        <TableCell colSpan={2}>
          <Avatar
            variant="rounded"
            alt={row.destination.name}
            src={row.destination.coverUrl}
            sx={{ position: 'static', mr: 2, width: 200, height: 200 }}
          />
        </TableCell>
        <TableCell style={{ maxWidth: 50 }}>
          <IconButton color={popover.open ? 'inherit' : 'default'}>
            <Iconify icon="material-symbols:save-sharp" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

MicaCustomTableRow.propTypes = {
  row: PropTypes.object,
};
