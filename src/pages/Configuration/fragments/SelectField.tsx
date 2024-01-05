import React from "react";
import {
  HelperText,
  MuiFormControl,
  MuiInputLabel,
  MuiMenuItem,
  MuiSelect,
} from "./style";
import { SelectChangeEvent } from "@mui/material/Select";
import { FormikProps } from "formik";
import { ConfigurationKeys, ConfigurationValues } from "../ConfigurationPage";

interface SelectFieldProps {
  formik: FormikProps<ConfigurationValues>;
  fieldName: ConfigurationKeys;
  helperText: string;
  label: string;
  menuItems: {
    value: string;
    text: string;
  }[];
}

const SelectField = ({
  formik,
  fieldName,
  helperText,
  label,
  menuItems,
}: SelectFieldProps) => {
  const handleChange = (
    event:
      | SelectChangeEvent
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    props: FormikProps<ConfigurationValues>,
    name: ConfigurationKeys,
  ) => {
    props.setFieldValue(name, event.target.value as string, true);
    props.setFieldTouched(name, true);
  };

  return (
    <MuiFormControl fullWidth>
      <MuiInputLabel
        id={fieldName}
        shrink={false}
        sx={{
          mt: "-48px",
          ml: "-10px",
        }}
      >
        {label}
      </MuiInputLabel>
      <MuiSelect
        inputProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                overflow: "scroll",
                maxHeight: "300px",
              },
            },
          },
        }}
        labelId={fieldName}
        displayEmpty
        variant="outlined"
        value={formik.values[fieldName]}
        name={fieldName}
        renderValue={(selected) => {
          if (selected === "") {
            return <HelperText>{helperText}</HelperText>;
          }

          return selected as React.ReactNode;
        }}
        onChange={(event) =>
          handleChange(event as SelectChangeEvent, formik, fieldName)
        }
      >
        {menuItems.map(({ value, text }) => (
          <MuiMenuItem value={value} key={value} disabled={value === ""}>
            {text}
          </MuiMenuItem>
        ))}
      </MuiSelect>
      {/*<ErrorMessage name={fieldName} component="div" />*/}
    </MuiFormControl>
  );
};

export default SelectField;
