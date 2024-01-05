import styled from "@emotion/styled";
import { ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export const ConfigurationContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Cinzel", serif;
  text-align: center;
  font-size: 3em;
  color: #333;
  margin-bottom: 48px;
  width: 100%;
`;

export const MuiTextField = styled(TextField)`
  .MuiInputBase-root {
    font-family: "Crimson Pro", serif;
    font-size: 21px;
    color: ${(props) =>
      props.value === "" ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0.7)"};
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.7);
    border-width: 1px;
  }

  .MuiOutlinedInput-notchedOutline {
    border-radius: 15px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ButtonArea = styled(Grid)`
  margin-top: 48px;
`;

export const LoadingText = styled.div`
  font-family: "Crimson Pro", serif;
  font-size: 1.7em;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 10px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: #e74c3c;
  font-size: 0.9em;
  margin-top: 5px;
`;
