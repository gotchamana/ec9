import React from "react";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { styled } from "@mui/system";
import i18next from "../../locale/index";

const Input = styled(TextField)`
  width: 90%;
  .MuiOutlinedInput-root {
    height: 2rem;
  }
  .Mui-error {
    text-align: right;
  }
`;

const ConfirmBtn = styled(Button)`
  display: flex;
  height: 3.5rem;
  width: 15rem;
  border-radius: 2rem;
`;

const validationSchema = Yup.object({
  account: Yup.string().required(i18next.t("error.required")),
  psd: Yup.string().required(i18next.t("error.required")),
});

export default function Login() {
  return (
    <Formik
      validateOnBlur={false}
      initialValues={{
        account: "",
        psd: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (/* values */) => {}}
    >
      {({ handleSubmit, handleChange, handleBlur, errors, values }) => (
        <Form onSubmit={handleSubmit}>
          <Grid
            container
            sx={{ width: "100%", height: "100vh" }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid container item sx={{ width: "20rem", height: "17rem" }}>
              <Grid container item>
                <Grid item xs={4}>
                  <Typography variant="body1">帳號</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    name="account"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.account}
                    helperText={errors.account}
                    error={!!errors.account}
                  />
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={4}>
                  <Typography variant="body1">密碼</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Input
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
              <Grid container justifyContent="center">
                <ConfirmBtn variant="contained">登入</ConfirmBtn>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
