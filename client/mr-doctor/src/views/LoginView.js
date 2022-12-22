import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import phoneValidator from "../utils/phoneNumber";
import { handleSubmit } from "../utils/formLogin";
import apiCalls from "../utils/apiCalls";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function LoginView() {
  const history = useNavigate();
  const [isValidPhone, setIsValidPhone] = React.useState(false);
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    if (user.phoneNumber) {
      console.log("User login request initiated", user);
      apiCalls
        .loginUser(user)
        .then((res) => {
          if (res.status === 200) {
            history("/");
          }
          console.log("Received result as promise from apiCall", res);
        })
        .catch((e) => console.log("Received error as promise from API", e));
    }
  }, [user, history]);

  return (
    <>
      <Header of="login" />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                const result = handleSubmit(e);
                setUser({ ...result });
              }}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                error={isValidPhone}
                helperText={isValidPhone ? "Incorrect phone number" : ""}
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                autoFocus
                onFocus={(e) => {
                  if (isValidPhone) {
                    setIsValidPhone(false);
                  }
                }}
                onBlur={(e) => {
                  if (!phoneValidator(e.target.value)) {
                    setIsValidPhone(true);
                  }
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
}
