import { Grid, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

interface Props {
  src: string;
}

const Container = styled(Grid)`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.palette.background.default};
`;

const Door = styled(Grid)`
  height: 100vh;
  box-sizing: border-box;
`;

const FullScreenImg = styled("div")`
  width: 100%;
  height: 100%;
  background-image: url(${(props: Props) => props.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Brand = styled("h1")`
  width: 15rem;
  padding: 1rem;
  font-size: 1.25rem;
  box-sizing: border-box;
  text-align: center;
  color: ${(props) => props.theme.palette.background.default};
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const LoginText = styled("p")`
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 1rem;
  margin: 1rem 0 2rem;
`;

const Input = styled(TextField)`
  width: 90%;
  min-height: 5rem;
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

export { Container, Door, FullScreenImg, Brand, LoginText, Input, ConfirmBtn };
