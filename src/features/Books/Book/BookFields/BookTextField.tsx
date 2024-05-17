import React from 'react';
import { Typography } from '@mui/material';
import TextFieldComponent from '../../../../components/FieldComponent/TextFieldComponent/TextFieldComponent';

type Props = {
  editMode: boolean;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1";
  type: "text" | "textarea";
  rows?: number
  name: string;
  value: string;
  updatedValue: string;
  label: string;
  handleFieldChangeReducer: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void
}

export const BookTextField = ({editMode, variant, type, rows, name, value, updatedValue, label, handleFieldChangeReducer} : Props) => {
  return (
    editMode ? (
      <TextFieldComponent
        autoComplete="off"
        className=""
        id={`book-${name}`}
        ariaLabel={label}
        name={name}
        value={updatedValue}
        type={type}
        {...(rows ? { rows: rows, multiline: true } : null)}
        color="primary"
        label={label}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, name)}
      />
    ) : (
      <Typography style={variant === "h1" ? {marginBottom: '1rem'} : {marginTop: '0.5rem', marginBottom: '0.5rem'}} color="primary" variant={variant}>
        {(label === "Name" || label === "Description" ) ? null : `${label}:`} {value}
      </Typography>
    )
  )
}

export default BookTextField;
