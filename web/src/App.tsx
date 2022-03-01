import React from "react";
import { Button, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers/index";
import { addData } from "./slices/test";

const Btn = styled(Button)`
  font-size: 30px;
`;

const A = styled("div")`
  width: 100px;
  height: 100px;
  background: red;
`;

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.test);

  return (
    <div className="App">
      <header className="App-header">
        <Btn variant="text">{data.txt}</Btn>
        <input
          onChange={(e) => dispatch(addData({ id: Math.random().toString(), txt: e.target.value }))}
        />
        <A />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
