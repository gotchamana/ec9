import React from "react";
import { Grid } from "@mui/material";
import Carousel from "./Carousel";
import Bar from "../../components/bar/Bar";
import Card from "./Card";
import Footer from "../../components/footer/Footer";
import Search from "./Search";
import Layout from "../../components/layout/layout";

function Main() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Main;
