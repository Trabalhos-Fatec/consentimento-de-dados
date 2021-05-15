import React from "react";
import "./css/perfil.css";

//Importações do material-UI
import {
  CameraAlt,
  Settings,
  Lock,
  Security,
  Translate,
  Info,
} from "@material-ui/icons";
import {
  Divider,
  IconButton,
  Typography,
  Grid,
  CardActions,
  CardContent,
  Card,
  makeStyles,
  Avatar,
  Fab,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: 250,
    height: 250,
  },
});

function Perfil() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={0}
      style={{ minHeight: "100vh" }}
    >
      {/* Card de perfil */}
      <Card className={classes.root} align="center">
        <CardContent>
          <Grid
            container
            direction="column"
            justify="center"
            spacing="2"
            alignItems="center"
          >
            <Grid item xs>
              <Grid
                container
                direction="row"
                justify="center"
                spacing={0}
                alignItems="flex-end"
              >
                {/* Avatar */}
                <Avatar
                  src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg"
                  className={classes.large}
                />
                <IconButton aria-label="upload picture" component="span">
                  <CameraAlt />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs>
              {/* Nome */}
              <Typography align="center" variant="h4" component="h2">
                Ana Maria Roberta
              </Typography>
            </Grid>
            <Grid item xs>
              <Grid
                container
                direction="row"
                justify="center"
                spacing="3"
                alignItems="center"
              >
                {/* Ferramentas */}
                <Grid item xs>
                  <Fab color="primary" aria-label="add" size="medium">
                    <Settings />
                  </Fab>
                  <Typography align="center" component="h6">
                    Configurações
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Fab color="primary" aria-label="add" size="medium">
                    <Security />
                  </Fab>
                  <Typography align="center" component="h6">
                    Segurança
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Fab color="primary" aria-label="add" size="medium">
                    <Lock />
                  </Fab>
                  <Typography align="center" component="h6">
                    Privacidade
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Fab color="primary" aria-label="add" size="medium">
                    <Translate />
                  </Fab>
                  <Typography align="center" component="h6">
                    Idioma
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Fab color="primary" aria-label="add" size="medium">
                    <Info />
                  </Fab>
                  <Typography align="center" component="h6">
                    Informações
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <br></br>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Perfil;
