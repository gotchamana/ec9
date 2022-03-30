import React from "react";
import { Grid, Typography, Button, TextField, Select, MenuItem } from "@mui/material";
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

const Btn = styled(Button)`
  display: flex;
  height: 2rem;
  width: 7rem;
  border-radius: 14px;
`;

const validationSchema = Yup.object({
  name: Yup.string().required(i18next.t("error.required")),
  price: Yup.number().required(i18next.t("error.required")),
  description: Yup.string().required(i18next.t("error.required")),
});

export default function Product() {
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        name: "",
        price: "",
        description: "",
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
            <Grid container item sx={{ width: "50vw", maxWidth: "20rem" }}>
              <Grid container item sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Typography variant="body1">商品名稱</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    name="name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    helperText={errors.name}
                    error={!!errors.name}
                  />
                </Grid>
              </Grid>
              <Grid container item sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Typography variant="body1">價格</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    name="price"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    helperText={errors.price}
                    error={!!errors.price}
                  />
                </Grid>
              </Grid>
              <Grid container item sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Typography variant="body1">類別</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select value="pet" onChange={() => {}} sx={{ height: "2rem" }}>
                    <MenuItem value="pet">活體寵物</MenuItem>
                    <MenuItem value="product">寵物用品</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid container item sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Typography variant="body1">商品介紹</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Input
                    name="description"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    helperText={errors.description}
                    error={!!errors.description}
                  />
                </Grid>
              </Grid>
              <Grid container item sx={{ my: 2 }}>
                <Grid item xs={4}>
                  <Typography variant="body1">上傳商品圖片</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Input type="file" variant="outlined" />
                </Grid>
              </Grid>
              <Grid container sx={{ my: 3, justifyContent: "space-around" }}>
                <Btn variant="contained">確認</Btn>
                <Btn variant="outlined">取消</Btn>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
