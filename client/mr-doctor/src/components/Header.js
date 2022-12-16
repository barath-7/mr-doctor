import * as React from "react";
// import dr-logo from "../resources/DoctorLogo.png";
import drLogo from "../resources/DoctorLogo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "../styles/Header.css";

export default function Header(props) {
  return (
    // <Box sx={{ flexGrow: 1, width: 800 }}>
    <AppBar position="fixed" style={{ backgroundColor: "snow" }}>
      <Toolbar
        variant="regular"
        style={{
          flex: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "50vh" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src={drLogo}
              alt="bug"
              height={80}
              style={{
                opacity: 0.7,
                borderRadius: "25px",
                marginRight: "1rem",
              }}
            />
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "InfoText", fontFamily: "monospace" }}
            >
              Mr-Dr
            </Typography>
          </IconButton>
        </div>
        <div style={{ width: "50vh" }}>
          {props.page !== "login" ? (
            <Button color="primary">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ color: "InfoText", fontFamily: "monospace" }}
              >
                Login
              </Typography>
            </Button>
          ) : (
            <></>
          )}
          <Button color="inherit">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "InfoText", fontFamily: "monospace" }}
            >
              Register
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
