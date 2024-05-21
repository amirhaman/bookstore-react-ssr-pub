import React from "react";
import { BookType } from "../../../types/@types.book";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Props {
  shoppingCartItems: BookType[]
}

export const ShoppingCartTableHead = ({ shoppingCartItems }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {Object.keys(shoppingCartItems[0]).map(
          (key: any) =>
            key !== "description" &&
            key !== "category" && (
              <TableCell style={{ ...(key === "id" ? { width: "10%" } : key === "name" ? { width: "60%" } : { width: "30%" }) }} align="left">
                {key === "id" ? "" : key}
              </TableCell>
            )
        )}
      </TableRow>
    </TableHead>
  );
};

export default ShoppingCartTableHead;
