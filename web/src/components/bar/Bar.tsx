import React, { useState } from "react";
import {
  Grid,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Box,
  Button,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import MenuIcon from "@mui/icons-material/Menu";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import LogoImg from "../../static/logoName.svg";

type MenuRef = HTMLElement | null;

const Logo = styled(Grid)`
  height: 3rem;
  font-size: 1.25rem;
  box-sizing: border-box;
  text-align: center;
  background: url(${LogoImg}), ${(props) => props.theme.palette.primary.main};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const NavItem = ["navigation.home", "navigation.pet", "navigation.product", "navigation.about"];
const ListProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

export default function Bar() {
  const { t, i18n } = useTranslation();
  const [isDisplayHamburger, toggleHamburger] = useState(false);
  const [menuRef, setMenuRef] = React.useState<MenuRef>(null);
  const open = Boolean(menuRef);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuRef(event.currentTarget);
  };
  const handleClose = () => {
    setMenuRef(null);
  };

  return (
    <>
      <Grid container item sx={{ height: "5rem" }}>
        <Grid
          xs={6}
          sx={{
            p: 1,
          }}
          item
        >
          <Logo
            sx={{
              width: {
                xs: "8rem",
                sm: "18rem",
              },
            }}
          />
        </Grid>
        <Grid
          xs={6}
          item
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Tooltip title="">
            <IconButton
              onClick={() => {
                if (i18n.language === "cn") {
                  i18n.changeLanguage("en");
                } else {
                  i18n.changeLanguage("cn");
                }
              }}
            >
              <GTranslateIcon
                sx={{ width: "2rem", height: "2rem", m: "0.5rem", color: "primary.dark" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="">
            <IconButton onClick={() => {}}>
              <ShoppingCartIcon
                sx={{ width: "2rem", height: "2rem", m: "0.5rem", color: "primary.dark" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="">
            <IconButton onClick={handleClick}>
              <AccountCircleIcon
                sx={{ width: "2.5rem", height: "2.5rem", m: "0.5rem", color: "primary.dark" }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={menuRef}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={ListProps}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Grid container item>
        <Toolbar sx={{ width: "100%" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}>
            <IconButton onClick={() => toggleHamburger(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isDisplayHamburger} onClose={() => toggleHamburger(false)}>
              <Box sx={{ width: "50vw" }}>
                <List>
                  {NavItem.map((name) => (
                    <ListItem button key={name}>
                      <ListItemText primary={t(name)} sx={{ color: "primary.dark" }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {NavItem.map((name, idx, arr) => (
              <React.Fragment key={name}>
                <span>|</span>
                <Button onClick={() => {}} sx={{ my: 2, display: "block" }}>
                  {t(name)}
                </Button>
                {idx === arr.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Grid>
    </>
  );
}
