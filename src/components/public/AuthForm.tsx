import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
//   Grid,
  Link,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
 

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Simulate login/register action
    alert(`${isLogin ? "Logging in" : "Registering"} with ${formData.email}`);
  };

  return (
    <Container maxWidth="xs">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mt: 8 }}
      >
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            {isLogin ? "Login" : "Register"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {!isLogin && (
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                margin="normal"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2, borderRadius: 2 }}
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </Box>

          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Grid size={"auto"}>
              <Link
                component="button"
                variant="body2"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin
                  ? "Don't have an account? Register"
                  : "Already have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
