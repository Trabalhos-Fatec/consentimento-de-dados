import React from 'react';
import './css/historico.css';

function Historico() {
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
                                    data-mdb-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >Mudanças Recentes</button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-mdb-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    <div class="col m-4">
                                        <div class="card m-3" style={{ height: '9vh', backgroundColor:"#de4343" }}>
                                            <div class="card-body text-white">
                                                <p class="text-start  m-0">20/07/2020</p>
                                                <p class="text-center m-0">Ana Maria Roberta não quer notificações pelo site.</p>
                                            </div>
                                        </div>
                                        <div class="card m-3" style={{ height: '9vh', backgroundColor:"#5fde43"}}>
                                            <div class="card-body text-white">
                                                <p class="text-start  m-0" >01/06/2020</p>
                                                <p class="text-center m-0">Ana Maria Roberta aceita notificações pelo site.</p>
                                            </div>
                                        </div>
                                        <div class="card m-3" style={{ height: '9vh', backgroundColor:"#de4343" }}>
                                            <div class="card-body text-white">
                                                <p class="text-start  m-0">24/02/2020</p>
                                                <p class="text-center m-0">Ana Maria Roberta não quer notificações por email.</p>
                                            </div>
                                        </div>
                                        <div class="card m-3" style={{ height: '9vh', backgroundColor:"#de4343" }}>
                                            <div class="card-body text-white">
                                                <p class="text-start  m-0">24/02/2020</p>
                                                <p class="text-center m-0">Ana Maria Roberta não quer notificações pelo site.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
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
                                                <tr>
                                                    <th scope="row">20/07/2020</th>
                                                    <td>SIM</td>
                                                    <td>NÃO</td>
                                                    <td>NÃO</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">01/06/2020</th>
                                                    <td>SIM</td>
                                                    <td>NÃO</td>
                                                    <td>SIM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">24/02/2020</th>
                                                    <td>SIM</td>
                                                    <td>NÃO</td>
                                                    <td>NÃO</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">16/01/2020</th>
                                                    <td>SIM</td>
                                                    <td>SIM</td>
                                                    <td>SIM</td>
                                                </tr>
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

