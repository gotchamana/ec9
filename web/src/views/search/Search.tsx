import React from "react";
import { Grid, Typography, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import Bar from "../../components/bar/Bar";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/layout";
import Card from "./Card";
import CatImg1 from "../../static/carousel/cat1.jpg";
import * as S from "./style";

export default function Search() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Bar />
      <Grid container sx={{ p: 4 }}>
        <S.BorderRight container item xs={12} md={4} alignContent="start">
          <Grid container item xs={12} alignItems="center">
            <Grid item xs={3}>
              {t("search.category")}
            </Grid>
            <Grid item xs={9}>
              <S.SelectInput value="pet" onChange={() => {}}>
                <MenuItem value="pet">寵物</MenuItem>
                <MenuItem value="product">商品</MenuItem>
              </S.SelectInput>
              <S.SelectInput value="cat" onChange={() => {}} sx={{ ml: 1 }}>
                <MenuItem value="dog">狗</MenuItem>
                <MenuItem value="cat">貓</MenuItem>
              </S.SelectInput>
              <S.SelectInput value="cat" onChange={() => {}} sx={{ ml: 1 }}>
                <MenuItem value="dog">衣服配飾</MenuItem>
                <MenuItem value="cat">居家</MenuItem>
              </S.SelectInput>
            </Grid>
          </Grid>

          <Grid container item xs={12} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={3}>
              {t("search.keyword")}
            </Grid>
            <Grid item xs={9}>
              <S.Input variant="outlined" />
            </Grid>
          </Grid>

          <Grid container item xs={12} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={3}>
              {t("search.priceRange")}
            </Grid>
            <Grid item xs={9}>
              <S.InputHalf variant="outlined" />
              <S.MiddleIcon>～</S.MiddleIcon>
              <S.InputHalf variant="outlined" />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <S.SearchBtn variant="contained">{t("button.search")}</S.SearchBtn>
          </Grid>
        </S.BorderRight>
        <Grid container item xs={12} md={8}>
          <Grid
            container
            item
            sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
          >
            <Typography variant="body1">{t("search.sort")}</Typography>
            <S.SelectInput value="popular" onChange={() => {}} sx={{ ml: 1, my: { xs: 2, sm: 0 } }}>
              <MenuItem value="popular">{t("search.popular")}</MenuItem>
              <MenuItem value="priceDesc">{t("search.priceDesc")}</MenuItem>
              <MenuItem value="priceAsc">{t("search.priceAsc")}</MenuItem>
              <MenuItem value="rateDesc">{t("search.rateDesc")}</MenuItem>
              <MenuItem value="rateAsc">{t("search.rateAsc")}</MenuItem>
            </S.SelectInput>
          </Grid>
          <Grid container item sx={{ pl: { sm: 4 } }}>
            {[1, 2, 3, 4, 5].map((val) => (
              <Card key={val} src={CatImg1} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Layout>
  );
}
