
// npm install @mui/material @mui/icons-material @emotion/react @emotion/styled framer-motion
import { type JSX } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { useNavigate } from "react-router";

export default function CarServiceLanding() {
  const navigate = useNavigate();

  const aboutSettings: {
    title: string;
    text: string;
    icon: JSX.Element;
  }[] = [
      {
        title: 'Expert Mechanics',
        text: 'Certified professionals who know your car inside and out.',
        icon: <BuildIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
      },
      {
        title: 'Guaranteed Service',
        text: 'Every repair is backed by our satisfaction guarantee.',
        icon: <VerifiedUserIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
      },
      {
        title: 'Modern Equipment',
        text: 'We use the latest diagnostic and repair tools available.',
        icon: <PrecisionManufacturingIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
      }
    ];


  const handleButtonClick = (value: string) => {
    navigate('/' + value);
  };


  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <DirectionsCarIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              AutoCare Pro
            </Typography>
          </Box>

          <Box display="flex" gap={2}>
            <Button variant="outlined" color="primary" onClick={() => handleButtonClick('login')}>
              login
            </Button>
            <Button variant="contained" color="primary" onClick={() => handleButtonClick('register')}>
              register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                gutterBottom
              >
                Professional car service you can trust
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                We take pride in offering top-quality automotive care,
                ensuring your vehicle stays reliable and safe on the road.
              </Typography>

            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} >
            <motion.img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
              alt="Car Service"
              style={{
                width: "100%",
                borderRadius: 16,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ py: 10, bgcolor: "white", textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why Choose AutoCare Pro?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
          >
            With over 15 years in the industry, we’ve built a reputation for
            excellence, reliability, and honesty. Your car deserves the best —
            and that’s exactly what we provide.
          </Typography>

          <Grid container spacing={4}>
            {aboutSettings.map(e => (
              <Grid size={{ xs: 12, md: 4 }} key={e.title} >
                <Card elevation={3}>
                  <CardContent>
                    {e.icon}
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                      {e.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {e.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#0d0d0d", color: "#ccc", py: 3, textAlign: "center" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} AutoCare Pro. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
