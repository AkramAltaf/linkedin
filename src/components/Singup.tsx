import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Handle signup logic (can include json-server requests here)
    console.log("Signup:", { email, password });
  };

  return (
    <Box>
      <Typography variant="h4">Signup</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSubmit} variant="contained">
        Signup
      </Button>
    </Box>
  );
};

export default Signup;
