import { styled } from "@mui/system";
import { Divider, Button } from "@mui/material";

export const CheckoutBtn = styled(Button)`
  width: 14rem;
  height: 2.5rem;
  border-radius: 10px;
`;

export const EDivider = styled(Divider)`
  height: 1px;
  background-color: ${(props) => props.theme.palette.text.primary};
`;
