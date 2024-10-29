import React, { useState } from "react";
import { Button, TextField, Typography, Box, Link } from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { RootState, AppDispatch } from "../store/store";
import { Navigate } from "react-router-dom";

const LoginContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f2ef;
`;

const FormContainer = styled(Box)`
  background: #ffffff;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  margin: 0 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const LoginButton = styled(Button)`
  background-color: #0073b1;
  color: #fff;
  &:hover {
    background-color: #005582;
  }
`;

const SignupLink = styled(Link)`
  color: #0073b1;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterText = styled(Typography)`
  margin-top: 20px;
  font-size: 14px;
  color: #767676;
`;

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <LoginContainer>
      <FormContainer>
        <LinkedInIcon
          sx={{ color: "#0a66c2", fontSize: 40 }}
          className="mx-auto"
        />
        <Typography variant="h5" fontWeight="bold">
          Sign in to LinkedIn
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <TextField
            label="Email or Phone"
            variant="outlined"
            fullWidth
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <LoginButton type="submit" variant="contained" fullWidth>
            Sign in
          </LoginButton>
        </form>
        <Typography>
          New to LinkedIn? <SignupLink href="/signup">Join now</SignupLink>
        </Typography>
        <FooterText>© 2024 LinkedIn</FooterText>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
