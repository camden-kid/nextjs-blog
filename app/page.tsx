"use client";

import { Metadata } from "next";
import styles from "./page.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

// export const metadata: Metadata = {
//   title: "Blogger",
//   description: "An example of Next.js",
// };

const platformItems = [
  {
    title: "Next.js",
    text: "A React-based open-source framework",
    url: "https://nextjs.org/",
  },
  {
    title: "React",
    text: "A library for web and native user interfaces",
    url: "https://react.dev/",
  },
  {
    title: "TypeScript",
    text: "Extends JavaScript by adding types to the language",
    url: "https://www.typescriptlang.org/",
  },
  {
    title: "GraphQL",
    text: "A data query and manipulation language for APIs and a query runtime engine",
    url: "https://graphql.org/",
  },
  {
    title: "Apollo Client",
    text: "A state management library that enables management of data with GraphQL",
    url: "https://nextjs.org/",
  },
  {
    title: "Hasura",
    text: "A GraphQL API",
    url: "https://hasura.io/",
  },
  {
    title: "MySql",
    text: "A relational database management system",
    url: "https://www.mysql.com/",
  },
  {
    title: "Vercel",
    text: "A cloud platform for static frontends and serverless functions",
    url: "https://vercel.com/",
  },
];

export default function Page() {
  return (
    <div className={styles.container}>
      <List>
        <ListSubheader>This blogger uses the following:</ListSubheader>
        {platformItems.map(({ title, text, url }) => (
          <ListItem disablePadding key={title}>
            <ListItemButton onClick={() => window.open(url, "_blank")?.focus()}>
              <ListItemText primary={title} secondary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
