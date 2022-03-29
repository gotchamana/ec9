import React from "react";
import CardItem from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

interface CardProps {
  src: string;
}

export default function Card({ src }: CardProps) {
  return (
    <CardItem sx={{ width: "14rem", height: "15rem", display: "flex", flexWrap: "wrap", m: 1 }}>
      <CardMedia component="img" height="120" image={src} alt="" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body1" color="text.primary" sx={{ textAlign: "center" }}>
          英國短毛貓
        </Typography>
      </CardContent>
      <CardActions sx={{ flexGrow: 1, justifyContent: "space-around" }}>
        <Rating value={2} readOnly />
        <Typography variant="h6" color="text.primary">
          $19999
        </Typography>
      </CardActions>
    </CardItem>
  );
}
