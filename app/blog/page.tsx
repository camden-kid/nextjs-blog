"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SyntheticEvent, useState } from "react";
import { useAddPostMutation } from "../generated/graphql";
import { useMain } from "../_contexts/main/MainContext";

export default function Blog() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [addPost, { loading, error, data }] = useAddPostMutation();
  const mainContext = useMain();

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date().toISOString();
    addPost({
      variables: {
        title,
        text,
        user_name: mainContext.loggedInUser,
        created: `${date.substring(0, 10)} ${date.substring(11, 22)}`,
      },
    });
  };

  return (
    <Stack component="form" padding={4} spacing={2} onSubmit={onSubmit}>
      <Typography variant="h5" component="div">
        Add new post
      </Typography>
      <TextField fullWidth required label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField fullWidth required label="Text" value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" variant="contained" disabled={!title || !text}>
        Submit
      </Button>
    </Stack>
  );
}
