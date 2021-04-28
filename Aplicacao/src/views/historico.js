import './css/historico.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";

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


    return (
        <div id="divPrincipal" class="container" style={{ height: '100vh' }}>
            <div class="row justify-content-center align-items-center h-100">
                <div class="col">
                    <p class="text-start fs-1">HISTÓRICO DE MODIFICAÇÕES</p>
                    <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >Histórico de Mudanças</button>
                            </h2>
                            <div
                                id="collapseTwo"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-mdb-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    <div class="col m-4">
                                        <table class="table text-center table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Data</th>
                                                    <th scope="col">Termos de licença</th>
                                                    <th scope="col">Notificação por email</th>
                                                    <th scope="col">Notificação pelo site</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {historico.map((value) => {
                                                     return <tr>
                                                                <th scope="row">
                                                                    {value.data_modificacao}
                                                                </th>
                                                                <td>SIM</td>
                                                                <td>{verifyStatus(value.status_email)}</td>
                                                                <td>{verifyStatus(value.status_sms)}</td>
                                                                
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end m-3">
                        <a href="/" class="btn btn-primary">Voltar</a> 
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Historico;