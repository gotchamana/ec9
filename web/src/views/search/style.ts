import { styled } from "@mui/system";
import { Grid, Button, TextField, Select } from "@mui/material";

export const BorderRight = styled(Grid)`
  height: 15rem;
  @media only screen and (min-width: 900px) {
    border-right: 2px solid ${(props) => props.theme.palette.primary.main};
    height: 70vh;
  }
`;

export const SelectInput = styled(Select)`
  height: 2rem;
  border-radius: 14px;
`;

export const Input = styled(TextField)`
  .MuiOutlinedInput-root {
    height: 2rem;
    border-radius: 14px;
  }
`;

export const InputHalf = styled(Input)`
  width: 40%;
`;
export const MiddleIcon = styled("span")`
  vertical-align: sub;
`;

export const SearchBtn = styled(Button)`
  width: 60%;
  height: 2.25rem;
  border-radius: 14px;
`;
