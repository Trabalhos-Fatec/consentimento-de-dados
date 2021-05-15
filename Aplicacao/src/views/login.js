import React from "react";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./css/login.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Login() {
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

  const classes = useStyles();

  return (
    <div id="divPrincipal" class="container" style={{ height: "100vh" }}>
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-5 col-sm-8">
          <Card align="center" className={classes.root}>
            <CardContent>
              <Typography id="Login" align="center" variant="h2" component="h2">
                LOGIN
              </Typography>
            </CardContent>
            <form noValidate autoComplete="off">
              <div id="camposLogin" class="col-md-7">
                <TextField
                  style={{ marginBottom: "10px" }}
                  fullWidth
                  id="standard-basic"
                  label="Email"
                />
                <br></br>
                <TextField
                  fullWidth
                  id="standard-basic"
                  type="password"
                  label="Senha"
                />
              </div>
            </form>
            <br></br>

            <div style={{ width: "250px" }}>
              <Button
                href="/Perfil"
                id="btn_entrar"
                fullWidth
                variant="contained"
                color="primary"
              >
                ENTRAR
              </Button>
            </div>
            <Typography
              style={{ margin: "12px 0px 0px 0px" }}
              align="center"
              component="h2"
            >
              Primeira Vez?
            </Typography>
            <Button id="btn_cadastro" href="/Cadastro" color="primary">
              Cadastre-se
            </Button>

            <div id="redesSociais">
              <IconButton
                id="btn_face"
                color="primary"
                aria-label="Entrar com Facebook"
                onClick={handleClickOpen}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                id="btn_insta"
                color="primary"
                aria-label="Entrar com Instagram"
                onClick={handleClickOpen}
              >
                <InstagramIcon />
              </IconButton>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {"Autorizar compartilhamento de dados?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Ao escolher a opção de “login” com redes sociais, seus dados
                    serão compartilhados com a plataforma escolhida, ou seja,
                    suas informações estarão com livre acesso para essa
                    plataforma.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDeny} color="primary">
                    Negar
                  </Button>
                  <Button href="/Perfil" color="primary">
                    Aceitar
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Login;
