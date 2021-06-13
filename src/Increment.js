import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PhotoCamera from "@material-ui/icons";
import {
  Typography,
  AppBar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CssBaseline,
  Toolbar,
  container,
  Button,
} from "@material-ui/core";

const Increment = () => {
  return (
    <div>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button variant="contained" color="primary">
            See my photo
          </Button>
          <Button variant="contained" color="secondary">
            See my photo
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Increment;
