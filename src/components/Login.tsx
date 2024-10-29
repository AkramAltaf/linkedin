import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = () => {
    // Call the login function from context
    login();
  };

  return (
    <Box>
      <Typography variant="h4">Login</Typography>
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
        Login
      </Button>
    </Box>
  );
};

export default Login;
