import "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  Divider,
  Card,
  DialogTitle,
  Grid,
  CardContent,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "./css/cadastro.css";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Cadastro() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const history = useHistory();
  const goHome = () => {
    alert("Cadastrado com Sucesso!!");
    history.push("/");
  };
  const mensagem = () => alert("Preencha todos os campos corretamente");

  const mensagemTermos = () =>
    alert("Os Termos de Uso devem ser aceitos para continuar");

  const mensagemTelefone = () => alert("Preencha o TELEFONE corretamente");

  function validar() {
    let a = document.getElementById("nome");
    let b = document.getElementById("sobrenome");
    let c = document.getElementById("data");
    let d = document.getElementById("email");
    let e = document.getElementById("senha");
    let f = document.getElementById("telefone");

    if (
      a != null &&
      b != null &&
      c != null &&
      d != null &&
      e != null &&
      f != null
    ) {
      a = a.value.trim();
      b = b.value.trim();
      c = c.value.trim();
      d = d.value.trim();
      e = e.value.trim();
      f = f.value.toString();
      f = f.trim();

      if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== "") {
        console.log("E", e);
        if (f.length === 11) {
          let termos = state.checkedA;
          if (termos === true) {
            return goHome;
          } else {
            return mensagemTermos;
          }
        } else {
          return mensagemTelefone;
        }
      } else {
        return mensagem;
      }
    } else {
      return mensagem;
    }
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2000-05-14T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setData(selectedDate.value);
  };

  return (
    <div className="gridizinha">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={0}
        style={{ minHeight: "100vh" }}
      >
        <Card align="center" className={classes.root}>
          {/* Conte??do do Card */}
          <CardContent>
            <Grid item xs>
              {/* T??tulo */}
              <Typography
                id="Cadastro"
                align="center"
                variant="h2"
                component="h2"
              >
                CADASTRO
              </Typography>
            </Grid>

            {/* Se????o dos Dados Pessoais */}
            <Typography style={{ fontSize: "17px" }} align="left">
              Dados Pessoais
            </Typography>
            <Divider
              style={{ marginBottom: "15px" }}
              class="divider"
              variant="middle"
            />

            <form noValidate autoComplete="off">
              <Grid item xs>
                <Grid container direction="column">
                  <TextField
                    required
                    id="nome"
                    label="Nome"
                    name="nome"
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <TextField
                    required
                    id="sobrenome"
                    label="Sobrenome"
                    name="sobrenome"
                    onChange={(e) => setSobrenome(e.target.value)}
                  />

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      required
                      style={{ marginBottom: "30px" }}
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="data"
                      label="Data de Nascimento"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      name="data"
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>

              {/* Se????o dos Dados da Conta */}
              <Typography style={{ fontSize: "17px" }} align="left">
                Dados da Conta
              </Typography>
              <Divider
                style={{ marginBottom: "15px" }}
                class="divider"
                variant="middle"
              />
              <Grid item xs>
                <TextField
                  required
                  style={{ marginBottom: "10px" }}
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  required
                  style={{ marginBottom: "20px" }}
                  fullWidth
                  id="senha"
                  type="password"
                  label="Senha"
                  name="senha"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Grid>

              {/* Se????o de Contato */}
              <Typography style={{ fontSize: "17px" }} align="left">
                Contato
              </Typography>
              <Divider
                style={{ marginBottom: "5px" }}
                class="divider"
                variant="middle"
              />
              <Grid item xs>
                <TextField
                  style={{ marginBottom: "35px" }}
                  required
                  fullWidth
                  id="telefone"
                  type="number"
                  label="Telefone"
                  name="telefone"
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Grid>

              {/* Se????o de Privacidade*/}
              <Typography style={{ fontSize: "17px" }} align="left">
                Privacidade
              </Typography>
              <Divider
                style={{ marginBottom: "15px" }}
                class="divider"
                variant="middle"
              />
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="baseline"
              >
                <Grid item xs>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={state.checkedG}
                        onChange={handleChange}
                        name="checkedA"
                      />
                    }
                    label="Eu aceito os termos de licen??a"
                  />
                  <Button onClick={handleClickOpen} variant="outlined">
                    Ler
                  </Button>
                </Grid>
                <Grid item xs>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={state.checkedG}
                        onChange={handleChange}
                        name="checkedB"
                      />
                    }
                    label="Eu quero receber novidades por email e celular."
                  />
                </Grid>
              </Grid>
            </form>
          </CardContent>

          <br></br>

          {/* Bot??es do final da tela */}
          <Grid item xs>
            <Grid container justify="space-around">
              <Button
                href="/"
                style={{ marginBottom: "20px" }}
                id="btn_voltar"
                variant="outlined"
                color="primary"
              >
                Voltar
              </Button>

              <Button
                style={{ marginBottom: "20px" }}
                id="btn_cadastrar"
                variant="outlined"
                color="primary"
                type="submit"
                onClick={validar()}
              >
                CADASTRAR
              </Button>
            </Grid>
          </Grid>

          {/* Caixa de di??logo dos termos de uso */}
          <div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Termos De Uso"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                <p>Esta pol??tica descreve as informa????es que processamos para viabilizar a opera????o do Tutube
                     e de outros produtos e recursos oferecidos pela Tutube.
                     Voc?? pode encontrar informa????es e ferramentas adicionais nas Configura????es do <a href="#">Tutube</a></p>
                  <p align="right"> Vers??o 0.0.2</p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Fechar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Card>
      </Grid>
    </div>
  );
}
export default Cadastro;
