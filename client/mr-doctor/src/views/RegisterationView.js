import * as React from "react";
import apiCalls from "../utils/apiCalls";
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
import Gender from "../components/Gender";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { handleSubmit } from "../utils/formSubmit";
import phoneValidator from "../utils/phoneNumber";
import { aadhaarNumberValidator } from "../utils/aadharValidator";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../components/AlertDialog";

var validator = require("email-validator");

const theme = createTheme();

export default function RegisterationView() {
  const history = useNavigate();

  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPhone, setIsValidPhone] = React.useState(false);
  const [isValidAadhar, setIsValidAadhar] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [modal, setModal] = React.useState({
    show: false,
    title: "",
    message: "",
  });
  const handleClose = () => {
    setModal({
      ...modal,
      show: false,
      title: "",
      message: "",
    });
  };
  React.useEffect(() => {
    if (user.phoneNumber.length === 10) {
      console.log("User registeration request initiated", user);
      apiCalls
        .registerUser(user)
        .then((res) => {
          if (res.status === 200) {
            history("/");
          }
        })
        .catch((e) => {
          if (!modal?.show) {
            setModal({
              ...modal,
              show: true,
              title: "Sign Up failed",
              message: e.response.data.message,
            });
          }
          console.log(
            "Received error as promise from API",
            e.response.data.message
          );
        });
    }
  }, [user, history]);

  return (
    <>
      <Header of="register" />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {!modal?.show ? (
            <Box
              sx={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register here !
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={(e) => {
                  const result = handleSubmit(e);
                  if (result) {
                    console.log(result);
                    setUser(result);
                  }
                }}
                sx={{ mt: 3, mb: 8 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={isValidEmail}
                      helperText={isValidEmail ? "Incorrect Email" : ""}
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onFocus={(e) => {
                        if (isValidEmail) {
                          setIsValidEmail(false);
                        }
                      }}
                      onBlur={(e) => {
                        if (
                          e.target.value !== "" &&
                          !validator?.validate(e.target.value)
                        ) {
                          setIsValidEmail(true);
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={isValidPhone}
                      helperText={isValidPhone ? "Incorrect Phone number" : ""}
                      required
                      fullWidth
                      name="phoneNumber"
                      label="Phone number"
                      type="tel"
                      id="phoneNumber"
                      autoComplete="phone-number"
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="dob"
                      label="Date of Birth"
                      type="date"
                      id="dob"
                      autoComplete="dob"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Gender />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="address"
                      label="Address"
                      type="text"
                      id="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="pincode"
                      label="Pin code"
                      type="text"
                      id="pinCode"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={isValidAadhar}
                      helperText={
                        isValidAadhar ? "Aadhar number is invalid" : ""
                      }
                      fullWidth
                      name="aadhar"
                      label="Aadhar number"
                      type="text"
                      id="aadhar"
                      autoComplete="aadhar"
                      onFocus={(e) => {
                        if (isValidPhone) {
                          setIsValidAadhar(false);
                        }
                      }}
                      onBlur={(e) => {
                        if (!aadhaarNumberValidator(e.target.value)) {
                          setIsValidAadhar(true);
                        }
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ) : (
            <Box sx={{ mt: 1 }}>
              <AlertDialog
                show={modal?.show}
                title={modal?.title}
                message={modal?.message}
                handleClose={handleClose}
              />
            </Box>
          )}
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
}
