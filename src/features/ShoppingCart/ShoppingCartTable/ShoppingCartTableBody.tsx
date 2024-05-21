import React from "react";
import { BookType } from "../../../types/@types.book";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface Props {
  shoppingCartItems: BookType[]
}

export const ShoppingCartTableBody = ({ shoppingCartItems }: Props) => {
  return (
    <TableBody>
      {shoppingCartItems.map((row: BookType, index: number) => (
        <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell aria-label="Id" style={{ width: "10%" }} align="left" component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell aria-label="Name" style={{ width: "60%" }} align="left">
            {row.name}
          </TableCell>
          <TableCell aria-label="Price" style={{ width: "30%" }} align="left">
            {row.price}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default ShoppingCartTableBody;
