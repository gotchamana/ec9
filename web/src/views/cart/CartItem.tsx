import React from "react";
import { Grid, Typography, IconButton, Checkbox } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import CatImg from "../../static/carousel/cat1.jpg";

const Img = styled("img")`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`;

export default function CartItem() {
  return (
    <Grid container item sx={{ my: 2 }}>
      <Grid
        item
        xs={12}
        sm={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 1, sm: 0 },
        }}
      >
        <Img src={CatImg} alt="" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="body1">可調節防潑水魔術氈雨衣-淺藍</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sm={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CloseIcon />
        <Typography variant="h6">{1}</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sm={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <Checkbox sx={{ ml: 1 }} />
      </Grid>
    </Grid>
  );
}
