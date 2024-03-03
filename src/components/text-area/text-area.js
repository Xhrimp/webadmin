import React from 'react';
import PropTypes from 'prop-types';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export default function TextArea({ placeholder }) {
  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        box-sizing: border-box;
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        
        
        // firefox
        &:focus-visible {
            outline: 0;
        }
        `
    // color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    // background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    // border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    // box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    // &:hover {
    //   border-color: ${blue[400]};
    // }

    // &:focus {
    //   border-color: ${blue[400]};
    //   box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    // }
  );

  return (
    <Textarea
      placeholder={placeholder}
      multiline
      minRows={7}
      maxRows={Infinity}
      sx={{ width: '100%' }}
    />
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
};
