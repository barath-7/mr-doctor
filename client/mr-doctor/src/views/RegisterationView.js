import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";

import {
  setHelperTextName,
  resetHelperTextName,
} from "../features/helperTextSlices/helperTextNameSlice";
import {
  setHelperTextDoctorId,
  resetHelperTextDoctorId,
} from "../features/helperTextSlices/helperTextDoctorIdSlice";
import {
  setHelperTextPhoneNumber,
  resetHelperTextPhoneNumber,
} from "../features/helperTextSlices/helperTextPhoneNumberSlice";
import {
  setHelperTextEmail,
  resetHelperTextEmail,
} from "../features/helperTextSlices/helperTextEmailSlice";
import {
  setHelperTextPassword,
  resetHelperTextPassword,
} from "../features/helperTextSlices/helperTextPasswordSlice";
import {
  setHelperTextAddress,
  resetHelperTextAddress,
} from "../features/helperTextSlices/helperTextAddressSlice";
import {
  setHelpertextDob,
  resetHelpertextDob,
} from "../features/helperTextSlices/helperTextDobSlice";

import Gender from "../components/Gender";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlertDialog from "../components/AlertDialog";

import { handleSubmit } from "../utils/formSubmit";
import phoneValidator from "../utils/phoneNumber";
import apiCalls from "../utils/apiCalls";
import { aadhaarNumberValidator } from "../utils/aadharValidator";

import { Link, useNavigate } from "react-router-dom";

var validator = require("email-validator");

const theme = createTheme();

export default function RegisterationView() {
  /************************************/

  const history = useNavigate();
  const doctorCheck = useSelector((state) => {
    return state.doctorCheck.value;
  });
  const isValidName = useSelector((state) => {
    return state.helperTextName.value;
  });
  const isValidPhone = useSelector((state) => {
    return state.helperTextPhoneNumber.value;
  });
  const isValidEmail = useSelector((state) => state.helperTextEmail.value);
  const isValidPassword = useSelector(
    (state) => state.helperTextPassword.value
  );
  const isValidAddress = useSelector((state) => state.helperTextAddress.value);
  const isValidDOB = useSelector((state) => state.helperTextDob.value);
  const isValidDoctorId = useSelector(
    (state) => state.helperTextDoctorId.value
  );

  const dispatch = useDispatch();
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
  const detailsValidator = () => {
    return (
      isValidName.length < 1 &&
      !isValidAadhar &&
      !isValidAddress &&
      !isValidDOB &&
      !isValidEmail &&
      !isValidPassword &&
      !isValidPhone &&
      user?.phoneNumber?.length > 1
    );
  };

  React.useEffect(() => {
    console.log(user);
    if (detailsValidator() && user) {
      console.log("User registeration request initiated", user);
      (async () => {
        try {
          const result = await apiCalls.registerUser(user);
          if (result?.data?.status === "success") {
            history("/");
          }
        } catch (e) {
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
        }
      })();
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
                sx={{ mt: 3, mb: 8 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  const result = handleSubmit(e);
                  if (result) {
                    setUser(result);
                  }
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={isValidName === "Name cannot be empty"}
                      helperText={
                        isValidName === "Name cannot be empty"
                          ? isValidName
                          : ""
                      }
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onFocus={(e) => {
                        dispatch(resetHelperTextName());
                      }}
                      onBlur={(e) => {
                        if (e.currentTarget.value.length < 1) {
                          dispatch(setHelperTextName());
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={isValidEmail.length > 1}
                      helperText={isValidEmail}
                      fullWidth
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onFocus={() => {
                        dispatch(resetHelperTextEmail());
                      }}
                      onBlur={(e) => {
                        if (
                          e.target.value === "" ||
                          !validator?.validate(e.target.value)
                        ) {
                          dispatch(setHelperTextEmail());
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={isValidPhone.length > 1}
                      helperText={isValidPhone}
                      required
                      fullWidth
                      name="phoneNumber"
                      label="Phone number"
                      type="tel"
                      id="phoneNumber"
                      autoComplete="phone-number"
                      onFocus={() => {
                        dispatch(resetHelperTextPhoneNumber());
                      }}
                      onBlur={(e) => {
                        if (!phoneValidator(e.target.value)) {
                          dispatch(setHelperTextPhoneNumber());
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={isValidPassword.length > 1}
                      helperText={isValidPassword}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onFocus={(e) => {
                        dispatch(resetHelperTextPassword());
                      }}
                      onBlur={(e) => {
                        if (e.target.value.length < 1) {
                          dispatch(setHelperTextPassword());
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={isValidDOB.length > 1}
                      helperText={isValidDOB}
                      onFocus={() => {
                        dispatch(resetHelpertextDob());
                      }}
                      onBlur={(e) => {
                        if (e.target.value.length < 1) {
                          dispatch(setHelpertextDob());
                        }
                      }}
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
                      error={isValidAddress.length > 1}
                      helperText={isValidAddress}
                      onFocus={(e) => {
                        dispatch(resetHelperTextAddress());
                      }}
                      onBlur={(e) => {
                        if (e.target.value.length < 1) {
                          dispatch(setHelperTextAddress());
                        }
                      }}
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
                      error={isValidAddress.length > 1}
                      helperText={isValidAddress}
                      onFocus={(e) => {
                        dispatch(resetHelperTextAddress());
                      }}
                      onBlur={(e) => {
                        if (e.target.value.length < 1) {
                          dispatch(setHelperTextAddress());
                        }
                      }}
                    />
                  </Grid>
                  {doctorCheck === "true" ? (
                    <Grid item xs={12}>
                      <TextField
                        error={isValidDoctorId.length > 1}
                        helperText={isValidDoctorId}
                        required
                        fullWidth
                        name="dcotorId"
                        label="Doctor ID"
                        type="text"
                        id="doctorId"
                        autoComplete="doctorId"
                        onFocus={(e) => {
                          dispatch(resetHelperTextDoctorId());
                        }}
                        onBlur={(e) => {
                          if (e.target.value.length < 1) {
                            dispatch(setHelperTextDoctorId());
                          }
                        }}
                      />
                    </Grid>
                  ) : (
                    <></>
                  )}
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
                        setIsValidAadhar(false);
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
