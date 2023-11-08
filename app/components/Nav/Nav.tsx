"use client"

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "./Nav.module.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";

export default function Nav(): JSX.Element {
  const router = useRouter();
  
  const onListItemClick = (route: string) => {
    router.push(route);
  }

  return (
    <nav className={styles.nav}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onListItemClick("/")}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onListItemClick("/")}>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onListItemClick("/info")}>
            <ListItemText primary="Info" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
}
