import React from "react";
import { useSelector } from "react-redux";
import { Snackbar } from "@mui/material";
import Route from "./route/route";
import { RootState } from "./reducers/index";

function App() {
  const snackData = useSelector((state: RootState) => state.snack);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackData.isShow}
        message={snackData.errorMsg}
      />
      <Route />
    </>
  );
}

export default App;
