import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import * as S from "./style";
import RegisterImg from "../../static/registerImg.jpg";
import api from "../../api/api";
import { snack } from "../../util/util";
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
  name: Yup.string().required(i18next.t("error.required")),
  account: Yup.string().email("invalid account").required(i18next.t("error.required")),
  psd: Yup.string()
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8}/, {
      message: i18next.t("error.psdInvalid"),
    })
    .required(i18next.t("error.required")),
});

function Register() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      validateOnBlur={false}
      initialValues={{
        name: "",
        account: "",
        psd: "",
      }}
      validationSchema={validationSchema}
      onSubmit={
        async (/* values */) => {
          //   await api(dispatch)({ method: "post", url: "" }, false);
          await snack(dispatch)(t("snack.registered"));
          navigate("/login");
        }
      }
    >
      {({ handleSubmit, handleChange, handleBlur, errors, values }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <S.Container container>
              <S.Door container item xs={12} sm={6} direction="column">
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "center",
                    justifyContent: "end",
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
                      <S.LoginText>{t("user.name")}</S.LoginText>
                    </Grid>
                    <Grid item xs={9}>
                      <S.Input
                        name="name"
                        type="text"
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        helperText={errors.name}
                        error={!!errors.name}
                      />
                    </Grid>
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
                      {t("register.register")}
                    </S.ConfirmBtn>
                  </Grid>
                  <Grid item sx={{ m: 1, ...CenterStyle }}>
                    <span>
                      {t("register.hasAccount")}
                      <Link to="/login">{t("register.login")}</Link>
                    </span>
                  </Grid>
                </Grid>
              </S.Door>
              <S.Door item sm={6}>
                <S.FullScreenImg src={RegisterImg} />
              </S.Door>
            </S.Container>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Register;
