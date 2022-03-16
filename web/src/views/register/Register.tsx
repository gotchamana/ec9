import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import * as S from "./style";
import RegisterImg from "../../static/registerImg.jpg";
import api from "../../api/api";
import { snack } from "../../util/util";

const CenterStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const CenterCenterStyle = {
  ...CenterStyle,
  alignContent: "center",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  account: Yup.string().email("invalid account").required("required"),
  psd: Yup.string()
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8}/, {
      message: "密碼需為八位數以上且英文數字夾雜",
    })
    .required("required"),
});

function Register() {
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
          await snack(dispatch)("註冊成功，稍後登入");
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
                      <S.LoginText>名稱</S.LoginText>
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
                      <S.LoginText>帳號</S.LoginText>
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
                      <S.LoginText>密碼</S.LoginText>
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
                      註冊
                    </S.ConfirmBtn>
                  </Grid>
                  <Grid item sx={{ m: 1, ...CenterStyle }}>
                    <span>
                      已有帳號？<Link to="/login">立即登入</Link>
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
