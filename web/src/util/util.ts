import { setSnack } from "../slices/snack";
import { AppDispatch } from "../store";

const snack = (dispatch: AppDispatch) => {
  return async (message: string) => {
    const payload = {
      isShow: true,
      errorMsg: message,
    };
    dispatch(setSnack(payload));
    setTimeout(() => {
      const closedPayload = {
        isShow: false,
        errorMsg: "",
      };
      dispatch(setSnack(closedPayload));
    }, 3000);
  };
};

export { snack };
export default {};
