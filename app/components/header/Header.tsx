"use client";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MainDispatch, useMain, useMainDispatch } from "../../contexts/main/MainContext";

export default function Header(): JSX.Element {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useMainDispatch() as MainDispatch;
  const mainContext = useMain();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (user: string) => {
    dispatch({ type: "logIn", user });
    localStorage.setItem("loggedInUser", user);
    setAnchorEl(null);
  };

  const onListItemClick = (route: string) => {
    router.push(route);
  };

  const logout = () => {
    dispatch({ type: "logOut", user: mainContext.loggedInUser });
    localStorage.removeItem("loggedInUser");
    router.push("/");
  };

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blogger
          </Typography>
          <Button color="inherit" onClick={() => onListItemClick("/blog")}>
            Blog
          </Button>
          <Button color="inherit" onClick={() => onListItemClick("/")}>
            Home
          </Button>
          {mainContext.loggedInUser ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" onClick={(e) => handleClick(e)}>
                Login
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => handleClose("Jack")}>Login as Jack</MenuItem>
                <MenuItem onClick={() => handleClose("Jill")}>Login as Jill</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
