import { useState } from "react";
import { Container, Box, TextField, Button, Typography, Paper, Link } from "@mui/material";
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { PathSegments } from "../../routes/enums";
import { useLoginLazyQuery } from "../../../graphql/generated";


export default function LoginForm() {
    const [performLogin, { called, loading, data }] = useLoginLazyQuery();
    const navigate = useNavigate();
    //   const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        // confirmPassword: "",
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // if (!isLogin && formData.password !== formData.confirmPassword) {
        //   alert("Passwords do not match!");
        //   return;
        // }
        // Simulate login/register action


        //nikolaystanov@autoservice.bg
        // UserPass!

        console.log(formData);

        performLogin({ variables: { email: formData.email, password: formData.password } }).then((value) => {
            console.log(value)
            console.log(called, loading, data);
        });

        // alert(`Logging in with ${formData.email}`);
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
                        {"Login"}
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 2, borderRadius: 2 }}
                        >
                            {"Login"}
                        </Button>
                    </Box>

                    <Grid container justifyContent="center" sx={{ mt: 2 }}>
                        <Grid size={"auto"}>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => navigate('/' + PathSegments.REGISTER)}
                            >
                                Don't have an account? Register
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}
