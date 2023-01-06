import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import DoctorSymbol from "../resources/DoctorSymbol.jpg";
import "../styles/Home.css";
import {
  isDoctor,
  isNotDoctor,
} from "../features/doctorCheckSlice/doctorCheckSlice";
import { useSelector, useDispatch } from "react-redux";

const theme = createTheme();

export default function Home() {
  const doctorCheck = useSelector((state) => state.doctorCheck.value);
  const dispatch = useDispatch();

  return (
    <>
      <Header of="home"></Header>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md" style={{ marginTop: "2rem" }}>
          <Box
            sx={{
              borderRadius: 5,
              maxWidth: "100vw",
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              backgroundImage: `url(${DoctorSymbol})`,
              backgroundAttachment: "scroll",
              WebkitBackgroundClip: "content-box",
              backgroundSize: "cover",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: 5,
                width: "100%",
                height: 400,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <Box
                sx={{
                  marginTop: 10,
                  marginLeft: 2,
                }}
              >
                <Typography sx={{ color: "whitesmoke" }} variant="h2">
                  Welcome to Mr-Dr !{" "}
                </Typography>
                <Typography sx={{ color: "whitesmoke" }} variant="h5">
                  Please select yes if you are a doctor
                </Typography>
                <Box
                  sx={{
                    maxWidth: "100vw",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{ mt: 3, color: "white", mr: 2 }}
                      variant="contained"
                      onClick={() => {
                        dispatch(isDoctor());
                      }}
                    >
                      <Typography variant="button">Yes</Typography>
                    </Button>
                  </Link>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{ mt: 3, color: "white" }}
                      variant="contained"
                      onClick={() => {
                        dispatch(isNotDoctor());
                      }}
                    >
                      <Typography variant="button">No</Typography>
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer></Footer>
    </>
  );
}
