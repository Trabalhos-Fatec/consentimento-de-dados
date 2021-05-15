import React from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './css/cadastro.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles'


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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


function Cadastro() {



    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

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

    const [selectedDate, setSelectedDate] = React.useState(new Date('2000-05-14T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };



    return (
        <div id="divPrincipal" class="container" style={{ height: '100vh' }}>
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-md-5 col-sm-8">
                    <Card align="center" className={classes.root}>
                        {/* Conteúdo do Card */}
                        <CardContent>
                            {/* Título */}
                            <Typography id="Cadastro" align="center" variant="h2" component="h2">
                                CADASTRO
        </Typography>
                            {/* Seção dos Dados Pessoais */}
                            <Typography style={{ fontSize: '17px' }} align="left">
                                Dados Pessoais
        </Typography>
                            <Divider style={{ marginBottom: "15px" }} class="divider" variant="middle" />

                            <form noValidate autoComplete="off">
                                <Grid style={{ marginBottom: "20px" }} container justify="space-around">
                                    <TextField required id="standard-basic" label="Nome" />
                                    <TextField required id="standard-basic" label="Sobrenome" />
                                </Grid>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        required
                                        style={{ marginBottom: "40px" }}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>

                                {/* Seção dos Dados da Conta */}
                                <Typography style={{ fontSize: '17px' }} align="left">
                                    Dados da Conta
        </Typography>
                                <Divider style={{ marginBottom: "15px" }} class="divider" variant="middle" />
                                <div id="camposContas" class="col-md-8">
                                    <TextField required style={{ marginBottom: "10px" }} fullWidth id="standard-basic" label="Email" />
                                    <TextField required style={{ marginBottom: "20px" }} fullWidth id="standard-basic" type="password" label="Senha" />
                                </div>

                                {/* Seção de Contato */}
                                <Typography style={{ fontSize: '17px' }} align="left">
                                    Contato
        </Typography>
                                <Divider style={{ marginBottom: "15px" }} class="divider" variant="middle" />
                                <div id="camposLogin" class="col-md-5">
                                    <TextField required fullWidth id="standard-basic" type="number" label="Telefone" />
                                </div>

                                {/* Seção de Privacidade*/}
                                <Typography style={{ fontSize: '17px' }} align="left">
                                    Privacidade
        </Typography>
                                <Divider style={{ marginBottom: "15px" }} class="divider" variant="middle" />
                                <Grid container justify="space-around">
                                    <FormControlLabel
                                        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedA" />}
                                        label="Eu aceito os termos de licença"
                                    />
                                    <Button onClick={handleClickOpen} variant="outlined">
                                        Ler
                                    </Button>
                                </Grid>
                                <FormControlLabel
                                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedB" />}
                                    label="Eu quero receber novidades por email e celular."
                                />


                            </form>



                        </CardContent>


                        <br></br>

                        {/* Botões do final da tela */}
                        <div class="row" >
                            <Grid container justify="space-around">
                                
                                    <Button href="/" style={{ marginBottom: "20px" }} id="btn_voltar" variant="outlined" color="primary">
                                        Voltar
</Button>
                                
                                
                                    <Button href="/" style={{ marginBottom: "20px" }} id="btn_cadastrar" variant="outlined" color="primary">
                                        CADASTRAR
</Button>
                                
                            </Grid>
                        </div>


                        {/* Caixa de diálogo dos termos de uso */}
                        <div>
                            <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">{"Termos De Uso"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        <p>Você precisa aceitar os termos se quiser se cadastrar</p>
                                        <p align="right"> Versão 0.0.1</p>

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
                </div>
            </div>
        </div>
    )
}
export default Cadastro;

