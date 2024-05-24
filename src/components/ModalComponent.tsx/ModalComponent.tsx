import React from 'react';
import { Box, Grid, Modal, Typography } from '@mui/material';
import StyledModalComponent from './StyledModalComponent';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  open: boolean;
  onClose: () => void;
  ariaLabelledBy: string;
  ariaDescribedBy: string;
  children: React.JSX.Element
}

export const ModalComponent = ({open, onClose, ariaLabelledBy, ariaDescribedBy, children}: Props ) => {
  return (
    <StyledModalComponent hideBackdrop={true} open={open} onClose={onClose} aria-labelledby={ariaLabelledBy} aria-describedby={ariaDescribedBy}>
        <Box className="w-full min-h-full flex flex-col p-2 pt-8 overflow-scroll">
        <CloseIcon color="primary" className="absolute top-2 right-2 cursor-pointer" onClick={() => onClose()} />
          {open && children}
        </Box>
      </StyledModalComponent>
  )
}

export default ModalComponent;
