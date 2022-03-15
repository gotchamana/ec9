import axios, { Method } from "axios";
import { AppDispatch } from "../store";
import { snack } from "../util/util";

interface Option {
  method: Method;
  url: string;
  body?: object;
}

const request = (dispatch: AppDispatch) => (option: Option, isAuth: boolean) => {
  if (isAuth) {
    // ...
  }
  return axios
    .request({
      method: option.method,
      baseURL: "",
      url: option.url,
      data: option.body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
      } else {
        snack(dispatch)("Unexpected error");
      }
    });
};

export default request;
