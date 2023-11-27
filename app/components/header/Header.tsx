"use client";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Header(): JSX.Element {
  const router = useRouter();
  
  const onListItemClick = (route: string) => {
    router.push(route);
  }

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blogger
          </Typography>
          <Button color="inherit" onClick={() => onListItemClick("/")}>Home</Button>
          <Button color="inherit" onClick={() => onListItemClick("/blog")}>Blog</Button>
          <Button color="inherit" onClick={() => onListItemClick("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}