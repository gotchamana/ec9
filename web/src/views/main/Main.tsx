import React from "react";
import { Grid, Paper } from "@mui/material";
import Carousel from "./Carousel";
import Bar from "../../components/bar/Bar";
import Card from "./Card";
import Footer from "./Footer";
import Search from "./Search";

function Main() {
  return (
    <Paper sx={{ width: "100%", minHeight: "100vh" }}>
      <Bar />
      <Grid container sx={{ my: "1rem", justifyContent: "center" }}>
        <Search />
      </Grid>
      <Grid container>
        <Carousel />
      </Grid>
      <Grid container sx={{ p: 5 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) => (
          <Card key={card} />
        ))}
      </Grid>
      <Footer />
    </Paper>
  );
}

export default Main;
