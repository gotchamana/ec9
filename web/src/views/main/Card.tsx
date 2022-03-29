import React from "react";
import CardItem from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CatImg1 from "../../static/carousel/cat1.jpg";

export default function Card() {
  return (
    <CardItem sx={{ width: "20rem", height: "23rem", display: "flex", flexWrap: "wrap", m: 1 }}>
      <CardMedia component="img" height="200" image={CatImg1} alt="" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" color="text.primary" sx={{ textAlign: "center" }}>
          英國短毛貓
        </Typography>
      </CardContent>
      <CardActions sx={{ flexGrow: 1, justifyContent: "space-around" }}>
        <Rating value={2} readOnly />
        <Typography variant="h4" color="text.primary">
          $19999
        </Typography>
      </CardActions>
    </CardItem>
  );
}
