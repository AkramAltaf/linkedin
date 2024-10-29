import React from "react";
import { Button, TextField, Typography, Box, Link } from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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

const Signup: React.FC = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <LinkedInIcon
          sx={{ color: "#0a66c2", fontSize: 40 }}
          className="mx-auto"
        />
        <Typography variant="h5" fontWeight="bold">
          Sign up to LinkedIn
        </Typography>
        <TextField
          label="Email or Phone"
          variant="outlined"
          fullWidth
          size="small"
        />
        <TextField label="Username" variant="outlined" fullWidth size="small" />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          size="small"
        />
        <TextField
          label="Re-enter Password"
          type="password"
          variant="outlined"
          fullWidth
          size="small"
        />
        <LoginButton variant="contained" fullWidth>
          Sign up
        </LoginButton>
        <Typography>
          Already on LinkedIn? <SignupLink href="/login">Sign in</SignupLink>
        </Typography>
        <FooterText>© 2024 LinkedIn</FooterText>
      </FormContainer>
    </LoginContainer>
  );
};

export default Signup;
