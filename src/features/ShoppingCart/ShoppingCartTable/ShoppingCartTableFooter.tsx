import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableFooter, Typography } from "@mui/material";
import { BookType } from "../../../types/@types.book";

interface Props {
  shoppingCartItems: BookType[]
}

export const ShoppingCartTableFooter = ({ shoppingCartItems }: Props) => {
  const subtotal = () => {
    let total = 0;
    shoppingCartItems.map((item: BookType) => {
      total = total + parseFloat(item.price.replace("$", ""));
    });
    total = total + (total * 13) / 100;
    return `$ ${total}`;
  };

  return (
    <TableFooter>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell aria-label="Id" style={{ width: "10%" }} align="right" component="th" scope="row"></TableCell>
        <TableCell aria-label="Name" style={{ width: "60%" }} align="right">
          <Typography fontWeight="bold" variant="body1" component="p">
            Tax
          </Typography>
        </TableCell>
        <TableCell aria-label="Price" style={{ width: "30%" }} align="left">
          <Typography fontWeight="bold" variant="body1" component="p">
            + 13%
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell aria-label="Id" style={{ width: "10%" }} align="right" component="th" scope="row"></TableCell>
        <TableCell aria-label="Name" style={{ width: "60%" }} align="right">
          <Typography fontWeight="bold" variant="body1" component="p">
            SubTotal
          </Typography>
        </TableCell>
        <TableCell aria-label="Price" style={{ width: "30%" }} align="left">
          <Typography fontWeight="bold" variant="body1" component="p">
            {subtotal()}
          </Typography>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default ShoppingCartTableFooter;
