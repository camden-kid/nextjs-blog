"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { MainDispatch, useMainDispatch } from "../_contexts/main/MainContext";

export default function Login(): JSX.Element {
  const dispatch = useMainDispatch() as MainDispatch;

  return (
    <Stack padding={4} spacing={2}>
      <Button type="submit" variant="contained" onClick={() => dispatch({ type: "logIn", user: "Jack" })}>
        Log in as Jack
      </Button>
      <Button type="submit" variant="contained">
        Log in as Jill
      </Button>
    </Stack>
  );
}
