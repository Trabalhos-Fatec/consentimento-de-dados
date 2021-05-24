import React from "react";
import { ExpandMore } from "@material-ui/icons";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  withStyles,
  Paper,
} from "@material-ui/core";
import "./css/historico.css";
import { makeStyles } from "@material-ui/core/styles";

//Propriedades da pagina
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 1200,
  },
  modificacao: {
    minWidth: 600,
  },
  gridizinha: {
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

//Tabela propriedades
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

//Colunas da Tabela
function createData(
  data,
  termosLicenca,
  notificacaoEmail,
  NotificacaoSite,
  CompartilhaTerceiro
) {
  return {
    data,
    termosLicenca,
    notificacaoEmail,
    NotificacaoSite,
    CompartilhaTerceiro,
  };
}

//Dados da tabela
const rows = [
  createData("20/08/2020", "SIM (Verção:0.0.2)", "NÃO", "NÃO", "NÃO"),
  createData("01/06/2020", "SIM (Verção:0.0.1)", "NÃO", "SIM", "SIM"),
  createData("24/02/2020", "SIM (Verção:0.0.1)", "NÃO", "NÃO", "SIM"),
  createData("16/01/2020", "SIM (Verção:0.0.1)", "SIM", "SIM", "SIM"),
];
//Pagina
function Historico() {
  const classes = useStyles();
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
        <Card
          style={{ backgroundColor: "#edebeb" }}
          align="center"
          className={classes.root}
        >
          <CardContent>
            <Grid
              container
              direction="column"
              justify="center"
              spacing="2"
              alignItems="stretch"
            >
              {/* Título */}
              <Grid item xs>
                <Typography align="left" variant="h4" component="h2">
                  Histórico de Modificações
                </Typography>
              </Grid>
              {/* Acordeão */}
              <Grid item xs>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Mudanças Recentes
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      spacing="2"
                    >
                      <Grid item xs>
                        <Card
                          class="ModificacaoNegativa"
                          className={classes.modificacao}
                        >
                          <CardContent>
                            <Grid
                              container
                              direction="column"
                              justify="flex-start"
                              alignItems="flex-start"
                            >
                              <Grid item xs>
                                <Typography className="textoCard">
                                  20/07/2020
                                </Typography>
                              </Grid>
                            </Grid>
                            <Typography className="textoCard">
                              Ana Maria Roberta não quer notificações pelo site.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs>
                        <Card
                          class="ModificacaoPositiva"
                          className={classes.modificacao}
                        >
                          <CardContent>
                            <Grid
                              container
                              direction="column"
                              justify="flex-start"
                              alignItems="flex-start"
                            >
                              <Grid item xs>
                                <Typography className="textoCard">
                                  01/06/2020
                                </Typography>
                              </Grid>
                            </Grid>
                            <Typography className="textoCard">
                              Ana Maria Roberta aceitou as modificações do
                              termos de licença (Versão:0.0.2)
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs>
                        <Card
                          class="ModificacaoNegativa"
                          className={classes.modificacao}
                        >
                          <CardContent>
                            <Grid
                              container
                              direction="column"
                              justify="flex-start"
                              alignItems="flex-start"
                            >
                              <Grid item xs>
                                <Typography className="textoCard">
                                  20/07/2020
                                </Typography>
                              </Grid>
                            </Grid>
                            <Typography className="textoCard">
                              Ana Maria Roberta não quer notificações por email.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs>
                        <Card
                          class="ModificacaoNegativa"
                          className={classes.modificacao}
                        >
                          <CardContent>
                            <Grid
                              container
                              direction="column"
                              justify="flex-start"
                              alignItems="flex-start"
                            >
                              <Grid item xs>
                                <Typography className="textoCard">
                                  20/07/2020
                                </Typography>
                              </Grid>
                            </Grid>
                            <Typography className="textoCard">
                              Ana Maria Roberta não quer notificações pelo site.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </AccordionDetails>

                  {/* Tabela de modificações */}
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      Histórico de Mudanças
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="customized table"
                      >
                        <TableHead>
                          <TableRow>
                            <StyledTableCell align="center">
                              Data
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Termos de licença
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Compartilhamento de dados com terceiros
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Notificação por email
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Notificação pelo site
                            </StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <StyledTableRow key={row.data}>
                              <StyledTableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
                                {row.data}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.termosLicenca}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.CompartilhaTerceiro}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.notificacaoEmail}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.NotificacaoSite}
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
export default Historico;
