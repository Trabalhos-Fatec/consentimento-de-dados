import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ExpandMore } from "@material-ui/icons";
import { Card,CardContent,Typography,Grid,Accordion,AccordionSummary,AccordionDetails,
  TableContainer,Table,TableHead,TableRow,TableBody,TableCell,withStyles,Paper,} from "@material-ui/core";
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

//Pagina
function Historico() {

  const [historico, setHistorico] = useState([]);


  useEffect(() => {
      Axios.get("http://localhost:3001/api/getLast").then((response) => {
          setHistorico(response.data)
      })
  }, []);

  const verifyStatus=((value)=>{
      if(value === "1") return "SIM";
      else if(value === "0" || value === "") return "NÃO";
  })



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
                              Data de Modificação
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Termo de Uso
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Notificação via Email
                            </StyledTableCell>
                            <StyledTableCell align="center">
                            Notificação na plataforma
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Compartilhamento com Terceiros
                            </StyledTableCell> 
                            <StyledTableCell align="center">
                              Versão do Documento
                            </StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                        {historico.map((value) => {
                            return <tr>
                                      <th scope="row">
                                          {value.data_modificacao}
                                      </th>
                                      <td>SIM</td>
                                      <td>{verifyStatus(value.status_email)}</td>
                                      <td>{verifyStatus(value.status_sms)}</td>
                                      <td>{verifyStatus(value.compartilhamento_terceiros)}</td>
                                      <td><td>{verifyStatus(value.versao)}</td></td>
                                    </tr>
                         })}
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
