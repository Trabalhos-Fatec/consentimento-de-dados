import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
  Slide,
  Grid,
  DialogActions,
} from "@material-ui/core";
import "./css/login.css";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
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

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();
  const goHome = () => history.push("/Home");

  const mensagem = () => alert("Preencha todos os campos corretamente");

  function validar() {
    var em = document.getElementById("email");
    var se = document.getElementById("senha");
    if (em !== null && se !== null) {
      em = em.value.trim();
      se = se.value.trim();
      if (em !== "" && se !== "") {
        return goHome;
      } else {
        return mensagem;
      }
    } else {
      return mensagem;
    }
  }

  return (
    <div className={classes.gridizinha}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={0}
        style={{ minHeight: "100vh" }}
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
                  id="Login"
                  align="center"
                  variant="h2"
                  component="h2"
                >
                  LOGIN
                </Typography>
              </Grid>

              <Grid item xs>
                <form
                  name="formulario"
                  autoComplete="off"
                  action=""
                  id="formulario"
                  method="POST"
                >
                  <TextField
                    style={{ marginBottom: "10px" }}
                    fullWidth
                    label="Email"
                    name="email"
                    id="email"
                    onChange={(email) => setEmail(email.target.value)}
                  />
                  <TextField
                    fullWidth
                    type="password"
                    label="Senha"
                    name="senha"
                    id="senha"
                    onChange={(senha) => setSenha(senha.target.value)}
                  />
                </form>
              </Grid>
              <Grid item xs>
                <Button
                  id="btn_entrar"
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={validar()}
                >
                  ENTRAR
                </Button>
              </Grid>
              <Grid item xs>
                <Typography align="center" component="h2">
                  Primeira Vez?
                </Typography>
                <Button id="btn_cadastro" href="/Cadastro" color="primary">
                  Cadastre-se
                </Button>
              </Grid>

              <Grid item xs>
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
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
export default Login;
