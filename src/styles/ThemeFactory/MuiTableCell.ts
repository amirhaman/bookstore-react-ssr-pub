import { Components, Theme } from "@mui/material";

const MuiTableCell: Components<Theme>["MuiTableCell"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      transition: theme.transitions.create(['color', 'transform'], {
        duration: 1000,
      }),
      background: theme.palette.background.default
    }),
  },
};

export default MuiTableCell;
