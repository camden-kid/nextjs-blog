import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Blog() {
  return (
    <Box component="form">
      <div>
        <TextField required id="outlined-required" label="Title" defaultValue="" />
        <TextField disabled id="outlined-disabled" label="Text" defaultValue="" />
      </div>
    </Box>
  );
}
