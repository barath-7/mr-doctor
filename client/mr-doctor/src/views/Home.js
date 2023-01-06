import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import DoctorSymbol from "../resources/DoctorSymbol.jpg";
import "../styles/Home.css";

const theme = createTheme();

export default function Home() {
  return (
    <>
      <Header of="home"></Header>
      <Container component="main" maxWidth="xl" style={{ marginTop: "2rem" }}>
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 800,
              height: 500,
              backgroundColor: "primary.main",
              backgroundImage: `url(${DoctorSymbol})`,
              WebkitBackgroundClip: "content-box",
            }}
          >
            <Box
              sx={{
                marginTop: 10,
                marginLeft: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "InfoText" }}>
                Please select yes if you are a doctor
              </Typography>
              <Button  sx={{ mt: 3, color: "black" }}>Yes</Button>
              <Button sx={{ mt: 3, color: "black" }}>No</Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer></Footer>
    </>
  );
}
