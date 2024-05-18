import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectShoppingCart } from "./ShoppingCart.Slice";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ShoppingCartEntry() {
  const shoppingCart = useAppSelector(selectShoppingCart);

  return (
    <Box className="relative ml-8">
      <ShoppingCartIcon color="primary" fontSize="medium" sx={{ position: "absolute", left:"-25px", color: "primary.light" }}></ShoppingCartIcon>
      <Typography component="h4" color="primary" sx={{ color: "primary.light", left: "-20px", top: "0", textAlign: "center", minHeight: "10px", minWidth: "24px", bgcolor: "primary.dark", borderRadius: "50%" }}>
        {shoppingCart.items.length}
      </Typography>
    </Box>
  );
}
