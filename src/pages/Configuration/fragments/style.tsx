import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const MuiSelect = styled(Select)`
  font-family: "Crimson Pro", serif;
  font-size: 1.3em;
  color: rgba(0, 0, 0, 0.7);
  .MuiOutlinedInput-notchedOutline {
    border-radius: 15px;
  }
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.6);
    border-width: 1px;
  }
`;

export const HelperText = styled.div`
  color: rgba(0, 0, 0, 0.5);
`;

export const MuiFormControl = styled(FormControl)`
  margin-top: 27px;
`;

export const MuiInputLabel = styled(InputLabel)`
  font-family: "Crimson Pro", serif;
  font-size: 1.4em;
  color: rgba(0, 0, 0, 0.6);
  &.Mui-focused {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const MuiMenuItem = styled(MenuItem)`
  font-family: "Crimson Pro", serif;
  font-size: 1.3em;
`;
