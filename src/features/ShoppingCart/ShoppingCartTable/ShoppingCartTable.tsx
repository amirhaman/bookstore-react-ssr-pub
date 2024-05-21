import React from "react";
import { BookType } from "../../../types/@types.book";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ShoppingCartTableHead from "./ShoppingCartTableHead";
import ShoppingCartTableBody from "./ShoppingCartTableBody";
import ShoppingCartTableFooter from "./ShoppingCartTableFooter";

interface Props {
  shoppingCartItems: BookType[];
}

export const ShoppingCartTable = ({ shoppingCartItems }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <ShoppingCartTableHead shoppingCartItems={shoppingCartItems} />
        <ShoppingCartTableBody shoppingCartItems={shoppingCartItems} />
        <ShoppingCartTableFooter shoppingCartItems={shoppingCartItems} />
      </Table>
    </TableContainer>
  );
};

export default ShoppingCartTable;
