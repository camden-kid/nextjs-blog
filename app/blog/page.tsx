import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Blog() {
  return (
    <Box component="form">
      <div>
        <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
        <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
      </div>
    </Box>
  );
}
