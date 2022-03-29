import React from "react";
import { Grid, Typography, Rating, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as S from "./style";
import Bar from "../../components/bar/Bar";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/layout";
import CatImg1 from "../../static/carousel/cat1.jpg";

export default function Product() {
  const { t } = useTranslation();
  const content = `
    【可調節防潑水魔術氈雨衣】
    帽子設計
    帽簷設計功能再升級
    三片立體版型
    空間大可放入耳朵
    
    匹配頭型
    可依據狗狗頭型大小
    反折調整帽子尺寸
    
    全魔術氈設計
    胸前，腳踝，腰部均用魔術氈調節，方便快速穿脱，前胸擁有全方位防塵
    
    折袖設計
    適合四隻較矮小的狗狗
    在雨天時將袖子反折後固定奔跑時不怕淋濕前腿
    
    細節設計
    背部防風片防止孔洞漏水
    精細矽膠展現經典LOGO
    `;
  return (
    <Layout>
      <Bar />
      <Grid container sx={{ p: 4 }} spacing="30">
        <Grid container item xs={12} sm={6} sx={{ maxHeight: "60vh" }}>
          <Grid item xs={12}>
            <Typography variant="body2">寵物用品 / 狗 / 外出</Typography>
          </Grid>
          <Grid item xs={12}>
            <S.Img src={CatImg1} alt="" />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={12}>
            <Typography variant="h5">可調節防潑水魔術氈雨衣-淺藍</Typography>
          </Grid>
          <Grid container item xs={12} sx={{ my: 2 }}>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Rating value={3} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                ${250}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sx={{ my: 2, display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ display: "inline" }}>
                {t("product.amount")}
              </Typography>
              <Select sx={{ ml: "1rem", height: "2rem" }} value={9} onChange={() => {}}>
                {Array(10)
                  .fill(0)
                  .map((_, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <MenuItem value={idx} key={idx}>
                      {idx}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <S.AddToCartBtn variant="contained">{t("button.addToCart")}</S.AddToCartBtn>
            </Grid>
            <Grid container sx={{ my: 2 }}>
              <S.Content color="text.primary">{content}</S.Content>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Layout>
  );
}
