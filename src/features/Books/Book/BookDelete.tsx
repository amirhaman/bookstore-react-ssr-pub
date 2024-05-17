import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';
import ModalComponent from '../../../components/ModalComponent.tsx/ModalComponent';

type Props = {
  id: string;
  action: 'delete' | 'edit' | 'cancel' | 'save';
  className?: string;
  label: string;
  variant: 'outlined';
  color: 'warning' | 'success' | 'primary';
  onClick: (id: string) => Promise<any>;
};

export const BookDelete = ({ id, action, className, label, variant, color, onClick }: Props) => {
  const [editModalStatus, setEditModalStatus] = useState(false);

  const handleAction = () => {
    switch (action) {
      case 'delete':
        setEditModalStatus(true);
        break;
      default:
        console.log('no action matched');
    }
  };

  const handleClose = () => setEditModalStatus(false);

  return (
    <Box>
      <ButtonComponent className={className} id={id} variant={variant} color={color} onClick={() => handleAction()}>
        {label}
      </ButtonComponent>
      <ModalComponent open={editModalStatus} onClose={handleClose} ariaLabelledBy="modal-book-confirm-action" ariaDescribedBy="modal-book-confirm-action">
        <Grid container className="w-full max-w-lg max-h-48 max-h-120 flex flex-row justify-center items-center" sx={{ margin: '0 auto' }}>
          <Grid item className="w-full">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you syre you want to perform this action?
            </Typography>
          </Grid>
          <Grid item className="w-full flex justify-end">
            <ButtonComponent className="mt-4 mr-4" id="close-modal" variant="outlined" color="primary" onClick={handleClose}>
              Cancel
            </ButtonComponent>
            <ButtonComponent className="mt-4" id={id} variant={variant} color={color} onClick={() => onClick(id)}>
              {label}
            </ButtonComponent>
          </Grid>
        </Grid>
      </ModalComponent>
    </Box>
  );
};

export default BookDelete;
