import React, { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectShoppingCart } from './ShoppingCart.Slice';
import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ModalComponent from '../../components/ModalComponent.tsx/ModalComponent';
import { Grid } from '@mui/material';
import ShoppingCartTable from '../ShoppingCart/ShoppingCartTable/ShoppingCartTable';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

export default function ShoppingCartEntry() {
  const [shoppingCartModal, setShoppingCartModal] = useState<boolean>(false);
  const shoppingCart = useAppSelector(selectShoppingCart);

  const handleShoppingCartModal = () => {
    setShoppingCartModal(true);
  };

  const handleClose = () => setShoppingCartModal(false);

  return (
    <Box className="relative">
      <ModalComponent open={shoppingCartModal} onClose={handleClose} ariaLabelledBy="modal-shooping-cart-content" ariaDescribedBy="modal-shooping-cart-content">
        <Grid container className="w-full max-w-lg max-h-48 max-h-120 flex flex-row justify-left items-center" sx={{ margin: '0 auto' }}>
          <Grid item className="w-full">
            <Typography id="modal-modal-title" variant="h6" component="h2" color="primary">
              Your Shopping Cart Items:
            </Typography>
          </Grid>
          {shoppingCart.items.length > 0 ? (
            <ShoppingCartTable shoppingCartItems={shoppingCart.items} />
          ) : (
            <Typography id="modal-modal-title" variant="body1" component="p" color="primary">
              There are no items in your shopping cart.
            </Typography>
          )}
        </Grid>
      </ModalComponent>
      <ButtonComponent id="shopping-cart-button" className="mr-2">
        <Typography
          fontWeight="bolder"
          component="h4"
          className="mr-0"
          color="primary"
          sx={{
            position: 'absolute',
            right: '0',
            top: '0',
            textAlign: 'center',
            minHeight: '20px',
            minWidth: '20px',
            borderRadius: '50%',
            zIndex: 1,
            lineHeight: '1.3',
            backgroundColor: "primary.light"
          }}>
          {shoppingCart.items.length}
        </Typography>
        <ShoppingCartIcon
          className="cursor-pointer"
          color="primary"
          style={{ fontSize: '35px' }}
          onClick={() => handleShoppingCartModal()}></ShoppingCartIcon>
      </ButtonComponent>
    </Box>
  );
}
