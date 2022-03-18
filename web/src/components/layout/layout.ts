import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const Layout = styled(Grid)`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.palette.background.default};
`;

export default Layout;
