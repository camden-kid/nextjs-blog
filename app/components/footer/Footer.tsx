"use client";

import styles from "./Footer.module.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="&copy; Pinakin Desai"
          onClick={() => window.open("https://www.linkedin.com/in/pinakin-desai-601017277/", "_blank")?.focus()}
        />
      </BottomNavigation>
    </footer>
  );
}
