import { setSnack } from "../slices/snack";
import { AppDispatch } from "../store";

const snack = (dispatch: AppDispatch) => {
  return async (message: string) => {
    const payload = {
      isShow: true,
      errorMsg: message,
    };
    dispatch(setSnack(payload));
    await new Promise((resolve) => {
      setTimeout(() => {
        const closedPayload = {
          isShow: false,
          errorMsg: "",
        };
        dispatch(setSnack(closedPayload));
        resolve(0);
      }, 3000);
    });
  };
};

export { snack };
export default {};
