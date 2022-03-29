import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Bar from "../../components/bar/Bar";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/layout";
import CartItem from "./CartItem";

import * as S from "./style";

export default function Cart() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Bar />
      <Grid container sx={{ py: 4, px: 12 }}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {t("cart.cart")}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ my: "2rem" }}>
          <S.EDivider />
        </Grid>
        <Grid container item>
          {[1, 2, 3, 4, 5].map((val) => (
            <CartItem key={val} />
          ))}
        </Grid>
        <Grid item xs={12} sx={{ my: "2rem" }}>
          <S.EDivider />
        </Grid>
        <Grid
          item
          container
          sx={{ display: "flex", justifyContent: "end", alignItems: "center", my: 1 }}
        >
          <Typography variant="body1" sx={{ mr: 1 }}>
            {t("cart.subtotal")}
          </Typography>
          <Typography variant="h5">${1500}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ my: 2, display: "flex", justifyContent: "center" }}>
          <S.CheckoutBtn variant="contained">{t("button.checkout")}</S.CheckoutBtn>
        </Grid>
      </Grid>
      <Footer />
    </Layout>
  );
}
