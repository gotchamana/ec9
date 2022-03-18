import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import * as S from "./style";
import LoginImg from "../../static/LoginImg.jpg";
import api from "../../api/api";
import i18next from "../../locale/index";

const CenterStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const CenterCenterStyle = {
  ...CenterStyle,
  alignContent: "center",
};

const validationSchema = Yup.object({
  account: Yup.string()
    .email(i18next.t("error.accountOrPsdInvalid"))
    .required(i18next.t("error.required")),
  psd: Yup.string().required(i18next.t("error.required")),
});

function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      validateOnBlur={false}
      initialValues={{
        account: "",
        psd: "",
      }}
      validationSchema={validationSchema}
      onSubmit={
        async (/* values */) => {
          await api(dispatch)({ method: "get", url: "" }, false);
          navigate("/register");
        }
      }
    >
      {({ handleSubmit, handleChange, handleBlur, errors, values }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <S.Container container>
              <S.Door item sm={6}>
                <S.FullScreenImg src={LoginImg} />
              </S.Door>
              <S.Door container item xs={12} sm={6} direction="column">
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "center",
                  }}
                >
                  <S.Brand>Happy Pet</S.Brand>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    p: 1,
                    ...CenterCenterStyle,
                  }}
                >
                  <Grid container rowGap={2}>
                    <Grid item xs={3} sx={CenterCenterStyle}>
                      <S.LoginText>{t("user.account")}</S.LoginText>
                    </Grid>
                    <Grid item xs={9}>
                      <S.Input
                        name="account"
                        type="text"
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.account}
                        helperText={errors.account}
                        error={!!errors.account}
                      />
                    </Grid>
                    <Grid item xs={3} sx={CenterCenterStyle}>
                      <S.LoginText>{t("user.psd")}</S.LoginText>
                    </Grid>
                    <Grid item xs={9}>
                      <S.Input
                        name="psd"
                        type="password"
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.psd}
                        helperText={errors.psd}
                        error={!!errors.psd}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item direction="column" xs={3}>
                  <Grid item sx={CenterStyle}>
                    <S.ConfirmBtn variant="contained" type="submit">
                      {t("login.login")}
                    </S.ConfirmBtn>
                  </Grid>
                  <Grid item sx={{ m: 1, ...CenterStyle }}>
                    <span>
                      {t("login.noAccount")}
                      <Link to="/register">{t("login.register")}</Link>
                    </span>
                  </Grid>
                </Grid>
              </S.Door>
            </S.Container>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;
