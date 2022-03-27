import React, { useState } from "react";
import { Grid, Button, Divider, TextField, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useTranslation } from "react-i18next";
import Bar from "../../components/bar/Bar";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/layout";

const Input = styled(TextField)`
  .MuiOutlinedInput-root {
    height: 2rem;
    width: 12rem;
    max-width: 30vw;
    border-radius: 14px;
  }
  .Mui-error {
    text-align: right;
  }
`;

export default function User() {
  const [isEdit, setEdit] = useState(true);
  const { t } = useTranslation();
  return (
    <Layout>
      <Bar />
      <Grid
        container
        sx={{
          flexDirection: "column",
          maxWidth: "30rem",
          width: "80vw",
          m: "auto",
          p: 3,
        }}
      >
        <Grid container item sx={{ justifyContent: "center" }}>
          <AccountCircleIcon sx={{ width: "5rem", height: "5rem", color: "primary.dark" }} />
        </Grid>
        <Divider sx={{ bgcolor: "primary.main", my: 2, height: "1px" }} />
        <Grid container item>
          <Grid container item xs={9} sx={{ flexDirection: "column" }}>
            <Typography variant="h6" sx={{ m: 1 }}>
              {t("user.name")}&nbsp;&nbsp;<span>111111</span>
            </Typography>
            <Typography variant="h6" sx={{ m: 1 }}>
              {t("user.account")}&nbsp;&nbsp;<span>111111</span>
            </Typography>
            <Typography variant="h6" sx={{ m: 1 }}>
              {t("user.psd")}&nbsp;&nbsp;
              {isEdit ? <Input /> : <span>●●●●●</span>}
            </Typography>
          </Grid>
          <Grid container item xs={3} sx={{ flexDirection: "column", alignItems: "end" }}>
            <IconButton
              onClick={() => {
                setEdit(!isEdit);
              }}
              sx={{
                width: "3rem",
                height: "3rem",
                my: 1,
                bgcolor: "primary.dark",
                color: "secondary.contrastText",
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {}}
              sx={{
                width: "3rem",
                height: "3rem",
                my: 1,
                bgcolor: "primary.dark",
                color: "secondary.contrastText",
              }}
            >
              <ReceiptLongIcon />
            </IconButton>
          </Grid>
        </Grid>
        {isEdit && (
          <Grid item sx={{ my: 2, display: "flex", justifyContent: "center" }}>
            <Button variant="contained">儲存</Button>
          </Grid>
        )}
      </Grid>
      <Footer />
    </Layout>
  );
}
