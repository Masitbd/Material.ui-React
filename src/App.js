import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import SaveIcon from "@material-ui/icons/Save";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Increment from "./Increment";
import { Children, Fragment } from "react";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <PhotoCamera />
        <Typography varient="h6" />
        Photo Album
      </AppBar>
      <main>
        <div className={classes.Container}>
          <Container style={{ marginTop: 100 }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Albam
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <Increment />
          </Container>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
