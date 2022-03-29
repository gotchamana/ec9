import React from "react";
import { Grid, Button, Typography, TextField, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import Bar from "../../components/bar/Bar";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/layout";
import Card from "./Card";
import CatImg1 from "../../static/carousel/cat1.jpg";

const BorderRight = styled(Grid)`
  height: 15rem;
  @media only screen and (min-width: 900px) {
    border-right: 2px solid ${(props) => props.theme.palette.primary.main};
    height: 70vh;
  }
`;

const SelectInput = styled(Select)`
  height: 2rem;
  border-radius: 14px;
`;

const Input = styled(TextField)`
  .MuiOutlinedInput-root {
    height: 2rem;
    border-radius: 14px;
  }
`;

const InputHalf = styled(Input)`
  width: 40%;
`;
const MiddleIcon = styled("span")`
  vertical-align: sub;
`;

const SearchBtn = styled(Button)`
  width: 60%;
  height: 2.25rem;
  border-radius: 14px;
`;

export default function Search() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Bar />
      <Grid container sx={{ p: 4 }}>
        <BorderRight container item xs={12} md={4} alignContent="start">
          <Grid container item xs={12} alignItems="center">
            <Grid item xs={3}>
              {t("search.category")}
            </Grid>
            <Grid item xs={9}>
              <SelectInput value="pet" onChange={() => {}}>
                <MenuItem value="pet">寵物</MenuItem>
                <MenuItem value="product">商品</MenuItem>
              </SelectInput>
              <SelectInput value="cat" onChange={() => {}} sx={{ ml: 1 }}>
                <MenuItem value="dog">狗</MenuItem>
                <MenuItem value="cat">貓</MenuItem>
              </SelectInput>
              <SelectInput value="cat" onChange={() => {}} sx={{ ml: 1 }}>
                <MenuItem value="dog">衣服配飾</MenuItem>
                <MenuItem value="cat">居家</MenuItem>
              </SelectInput>
            </Grid>
          </Grid>

          <Grid container item xs={12} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={3}>
              {t("search.keyword")}
            </Grid>
            <Grid item xs={9}>
              <Input variant="outlined" />
            </Grid>
          </Grid>

          <Grid container item xs={12} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={3}>
              {t("search.priceRange")}
            </Grid>
            <Grid item xs={9}>
              <InputHalf variant="outlined" />
              <MiddleIcon>～</MiddleIcon>
              <InputHalf variant="outlined" />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <SearchBtn variant="contained">{t("button.search")}</SearchBtn>
          </Grid>
        </BorderRight>
        <Grid container item xs={12} md={8}>
          <Grid
            container
            item
            sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
          >
            <Typography variant="body1">{t("search.sort")}</Typography>
            <SelectInput value="popular" onChange={() => {}} sx={{ ml: 1, my: { xs: 2, sm: 0 } }}>
              <MenuItem value="popular">{t("search.popular")}</MenuItem>
              <MenuItem value="priceDesc">{t("search.priceDesc")}</MenuItem>
              <MenuItem value="priceAsc">{t("search.priceAsc")}</MenuItem>
              <MenuItem value="rateDesc">{t("search.rateDesc")}</MenuItem>
              <MenuItem value="rateAsc">{t("search.rateAsc")}</MenuItem>
            </SelectInput>
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
