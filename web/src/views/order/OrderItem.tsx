import React from "react";
import { Grid, Typography, Divider, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CatImg1 from "../../static/carousel/cat1.jpg";

const DateLabel = styled("span")`
  width: 7rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  margin-right: 1rem;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.secondary.contrastText};
`;

const ReviewBtn = styled(Button)`
  width: 7rem;
  height: 2rem;
  border-radius: 14px;
  margin: 0 1rem;
`;

const Img = styled("img")`
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  margin-left: 1rem;
`;

export default function OrderItem() {
  const { t } = useTranslation();
  return (
    <Grid item container>
      <Grid item xs={8}>
        <Grid item container sx={{ my: 1 }}>
          <DateLabel>2022/3/2</DateLabel>
          <ReviewBtn variant="contained">{t("order.giveReviews")}</ReviewBtn>
        </Grid>
        <Grid item xs={12} sx={{ my: 1 }}>
          <Typography variant="body1">{t("order.trackingNumber")}: 123456789</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">${100}</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={4} alignItems="center">
        <Img src={CatImg1} />
        <Img src={CatImg1} />
        <MoreHorizIcon sx={{ ml: 1, fontSize: "2rem" }} />
      </Grid>
      <Grid item xs={12} sx={{ my: 2 }}>
        <Divider />
      </Grid>
    </Grid>
  );
}
