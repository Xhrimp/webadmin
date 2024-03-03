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

import { TableHeadCustom } from '../../../components/table';
import Scrollbar from '../../../components/scrollbar';
import { usePopover } from '../../../components/custom-popover';
import { Checkbox } from '@mui/material';
import TextArea from '../../../components/text-area/text-area';
import Iconify from '../../../components/iconify/iconify';

export default function ScannerCameraTable({ title, subheader, tableLabels, tableData, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />
      <TableContainer sx={{ overflow: 'hidden', height: 460 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={tableLabels} />
            <TableBody>
              {tableData.map((row) => (
                <ScannerCameraTableRow key={row.id} row={row} />
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

ScannerCameraTable.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

function ScannerCameraTableRow({ row }) {
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
        <TableCell style={{ minWidth: 100 }}>Preview</TableCell>

        <TableCell style={{ maxWidth: 100 }}>Variant</TableCell>
      </TableRow>
    </>
  );
}

ScannerCameraTableRow.propTypes = {
  row: PropTypes.object,
};
