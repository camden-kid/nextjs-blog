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

  const onListItemClick = (id: string) => {
    router.push(`/posts/${id}`);
  };

  return (
    <aside className={styles.aside}>
      <List>
        <ListSubheader sx={{bgcolor: "lightgray"}}>Recent posts</ListSubheader>
        {data?.post.map(({ _id, title, created }) => (
          <ListItem disablePadding key={_id.$oid}>
            <ListItemButton onClick={() => onListItemClick(_id.$oid)}>
              <ListItemText primary={title} secondary={new Date(created).toLocaleDateString()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
}
