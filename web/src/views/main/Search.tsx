import React from "react";
import { Box, InputBase, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

const Input = styled(InputBase)`
  width: 25vw;
  min-width: 10rem;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 2px 4px;
  box-sizing: border-box;
`;
const SearchBtn = styled(Button)`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  vertical-align: top;
  height: 2.35rem;
  width: 6rem;
  box-shadow: none;
`;

export default function Search() {
  const { t } = useTranslation();
  return (
    <Box>
      <Input />
      <SearchBtn variant="contained">{t("button.search")}</SearchBtn>
    </Box>
  );
}
