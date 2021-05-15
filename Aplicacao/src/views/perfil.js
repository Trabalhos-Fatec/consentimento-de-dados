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
  CardContent,
  Card,
  makeStyles,
  Avatar,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
  Slide,
  FormControlLabel,
  withStyles,
  Checkbox,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";


//Checkboxs
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

//Propiedades da pagina
const useStyles = makeStyles({
  root: {
    minWidth: 550,
  },
  gridizinha: {
    flexGrow: 1,
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Perfil() {
  //Checkbox
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  //Controler do Dialog(modal)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDeny = () => {
    setOpen(false);
  };

  return (
    <div className={classes.gridizinha}>
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
              alignItems="strech"
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
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="medium"
                      onClick={handleClickOpen}
                    >
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
        </Card>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Opções de Privacidade"}
        </DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedA}
                onChange={handleChange}
              />
            }
            label="Eu aceito os termo de licença."
          />
           <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            }
            label="Eu quero receber notificações pelo site."
          />
           <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
              />
            }
            label="Eu quero receber novidades por email."
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedD}
                onChange={handleChange}
                name="checkedD"
              />
            }
            label="Eu aceito que meus dados sejam compartilhados com terceiros."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeny} color="primary">
          Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Perfil;
