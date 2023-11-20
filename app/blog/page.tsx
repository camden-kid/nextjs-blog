"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function Blog() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(1)
  };

  return (
    <Stack component="form" padding={4} spacing={2} onSubmit={onSubmit}>
      <TextField fullWidth required label="Title" defaultValue="" />
      <TextField fullWidth required label="Text" defaultValue="" />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Stack>
  );
}
