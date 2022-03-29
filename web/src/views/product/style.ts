import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const Img = styled("img")`
  width: 100%;
  max-height: 40vh;
  object-fit: contain;
`;

export const Content = styled("p")`
  white-space: pre-line;
`;

export const AddToCartBtn = styled(Button)`
  width: 75%;
  height: 3rem;
  font-size: 1rem;
`;
