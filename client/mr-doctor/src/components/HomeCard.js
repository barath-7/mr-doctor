import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import drLogo from "../resources/DoctorSymbol.jpg";

export default function MediaCard() {
  return (
    <Card>
      <CardMedia sx={{ height: 200 }} src={drLogo} title="doctor" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Welcome to Mr-Dr !{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please click yes if you are a doctor
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Yes</Button>
        <Button size="small">No</Button>
      </CardActions>
    </Card>
  );
}
