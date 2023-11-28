"use client";

import styles from "./Aside.module.css";
import List from "@mui/material/List";
import { useRouter } from "next/navigation";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useGetAllPostsQuery } from "../../generated/graphql";
import ListSubheader from "@mui/material/ListSubheader";

export default function Aside(): JSX.Element {
  const { data } = useGetAllPostsQuery();
  const router = useRouter();

  const onListItemClick = (id: number) => {
    router.push(`/post/${id}`);
  };

  return (
    <aside className={styles.aside}>
      <List>
        <ListSubheader sx={{ bgcolor: "#edf5ff" }}>Recent posts</ListSubheader>
        {data?.post.map(({ id, title, user_name, created }) => (
          <ListItem disablePadding key={id}>
            <ListItemButton onClick={() => onListItemClick(id)}>
              <ListItemText primary={title} secondary={`${user_name} - ${new Date(created).toLocaleDateString()}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
}
