import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Slide,
  Grid,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import "./css/admin.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import MovieIcon from "@material-ui/icons/Movie";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 700,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  gridizinha: {
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Admin() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const history = useHistory();
  const goPerfil = () => history.push("/Perfil");

  return (
    <>
      <AppBar style={{ backgroundColor: "#008558" }} position="static">
        <Toolbar variant="dense">
          <MovieIcon style={{ marginRight: "10px" }} />
          <Typography variant="h6" color="inherit">
            TUTUBE
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.gridizinha}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={0}
          style={{ minHeight: "90vh" }}
        >
          {/* Começo do Card */}
          <Card align="center" className={classes.root}>
            <CardContent>
              <Grid
                container
                direction="column"
                justify="center"
                spacing="2"
                alignItems="stretch"
              >
                <Grid item xs>
                  <Typography
                    id="title"
                    align="center"
                    variant="h2"
                    component="h2"
                  >
                    ENVIAR NOTIFICAÇÃO
                  </Typography>
                </Grid>

                <Grid style={{ marginBottom: "5vh" }} item xs>
                  <Typography
                    style={{ marginBottom: "15px" }}
                    align="left"
                    variant="h5"
                    component="h5"
                  >
                    TUTUBE
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    spacing="0"
                    alignItems="center"
                  >
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Texto"
                        variant="outlined"
                      />
                    </form>
                    <Button id="btn" variant="contained" color="secondary">
                      ENVIAR
                    </Button>
                  </Grid>
                </Grid>

                <Grid style={{ marginBottom: "5vh" }} item xs>
                  <Typography
                    style={{ marginBottom: "15px" }}
                    align="left"
                    variant="h5"
                    component="h5"
                  >
                    EMAIL
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing="0"
                    alignItems="center"
                  >
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Texto"
                        variant="outlined"
                      />
                    </form>
                    <Button id="btn" variant="contained" color="secondary">
                      ENVIAR
                    </Button>
                  </Grid>
                </Grid>

                <Grid style={{ marginBottom: "5vh" }} item xs>
                  <Typography
                    style={{ marginBottom: "15px" }}
                    align="left"
                    variant="h5"
                    component="h5"
                  >
                    CELULAR
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing="0"
                    alignItems="center"
                  >
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Texto"
                        variant="outlined"
                      />
                    </form>
                    <Button id="btn" variant="contained" color="secondary">
                      ENVIAR
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
  );
}
export default Admin;
