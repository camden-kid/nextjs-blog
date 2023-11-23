"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { SyntheticEvent, useState } from "react";

export default function Blog() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(1)
  };

  return (
    <Stack component="form" padding={4} spacing={2} onSubmit={onSubmit}>
      <TextField fullWidth required label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField fullWidth required label="Text" value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" variant="contained" disabled={!title || !text}>
        Submit
      </Button>
    </Stack>
  );
}
