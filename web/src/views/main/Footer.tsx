import React from "react";
import styled from "@emotion/styled";
import { Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LogoImg from "../../static/logoName.svg";

const Logo = styled("img")`
  width: 10rem;
  height: 4rem;
  font-size: 1.25rem;
  box-sizing: border-box;
  filter: invert(42%) sepia(44%) saturate(314%) hue-rotate(51deg) brightness(75%) contrast(87%);
`;

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <Divider sx={{ bgcolor: "primary.main" }} />
      <Grid container sx={{ height: "6rem", p: 2 }}>
        <Grid xs={9} item>
          <Logo src={LogoImg} />
        </Grid>
        <Grid xs={3} container item>
          <Grid item sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" color="primary.main" sx={{ fontSize: "1rem" }}>
              {t("footer")}
            </Typography>
            <Typography variant="body2" color="primary.main">
              Star
            </Typography>
            <Typography variant="body2" color="primary.main">
              Tim
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
