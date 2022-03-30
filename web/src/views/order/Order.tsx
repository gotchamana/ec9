import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Bar from "../../components/bar/Bar";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/layout";
import OrderItem from "./OrderItem";
import ReviewDialog from "./ReviewDialog";
import * as S from "./style";

export default function Order() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Bar />
      <ReviewDialog />
      <Grid container sx={{ py: 4, px: 12 }}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {t("order.title")}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ my: "2rem" }}>
          <S.EDivider />
        </Grid>
        {[1, 2, 3, 4, 5].map((val) => (
          <OrderItem key={val} />
        ))}
      </Grid>
      <Footer />
    </Layout>
  );
}
