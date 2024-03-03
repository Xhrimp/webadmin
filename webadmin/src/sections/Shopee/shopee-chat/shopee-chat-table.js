'use client';

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
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

import { fDate, fTime } from '../../../utils/format-time';

import Label from '../../../components/label';
import Scrollbar from '../../../components/scrollbar';
import { TableHeadCustom } from '../../../components/table';
import { usePopover } from '../../../components/custom-popover';

export default function ShopeeChatTable({ title, subheader, tableLabels, tableData, ...other }) {
  return (
    <Card {...other} sx={{ mb: 7 }}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'hidden', height: 460 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={tableLabels} />
            <TableBody>
              {tableData.map((row) => (
                <ShopeeChatTableRow key={row.id} row={row} />
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
    </Card>
  );
}

ShopeeChatTable.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

function ShopeeChatTableRow({ row }) {
  const theme = useTheme();

  const lightMode = theme.palette.mode === 'light';

  const popover = usePopover();

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

  return (
    <>
      <TableRow>
        <TableCell style={{ maxWidth: 40 }}>S{Math.floor(Math.random() * 10)}</TableCell>

        <TableCell style={{ maxWidth: 40 }}>{Math.floor(Math.random() * 10)}</TableCell>

        <TableCell style={{ maxWidth: 100 }}>{Math.floor(Math.random() * 10 + 1)} hours</TableCell>

        <TableCell style={{ maxWidth: 50 }}>
          <Label
            variant={lightMode ? 'soft' : 'filled'}
            color={(row.status === 'Paid' && 'success') || 'error'}
          >
            {(row.status === 'Paid' && 'Active') || 'error'}
          </Label>
        </TableCell>

        {/* <TableCell align="right" sx={{ pr: 1 }}>
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell> */}
      </TableRow>
    </>
  );
}

ShopeeChatTableRow.propTypes = {
  row: PropTypes.object,
};
