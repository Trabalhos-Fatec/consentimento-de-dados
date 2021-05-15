import React from 'react';
import './css/perfil.css';

function Perfil() {
    
    return (
        
        <div id="divPrincipal" class="container" style={{ height: '100vh' }}>
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-md-5 col-sm-8">
                    <div class="card text-center">
                        <div class="card-header">
                            <div class="row">
                                <div>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" class="img-fluid rounded-circle" alt="" />
                                    <button class="btn btn-outline btn-lg btn-floating"> <i class="fas fa-camera"></i> </button>
                                </div>
                            </div>

                        </div>

                        <div class="card-body">

                            <p class="card-text">
                                <div class="row">
                                    <p class="fs-4">Ana Maria Roberta</p>
                                </div>

                                <div class="container">

                                    <div class="row">
                                        <div class="col">
                                            <button type="button" class="btn btn-info btn-floating">
                                                <i class="fas fa-cog fa-lg"></i>
                                            </button>
                                            <label>Geral</label>
                                        </div>
                                        <div class="col">
                                            <button type="button" class="btn btn-info btn-floating">
                                                <i class="fas fa-shield-alt fa-lg"></i>
                                            </button>
                                            <label>Segurança</label>
                                        </div>
                                        <div class="col">
                                            <button
                                                type="button"
                                                class="btn btn-info btn-floating"
                                                data-mdb-toggle="modal"
                                                data-mdb-target="#exampleModal">
                                                <i class="fas fa-lock fa-lg"></i>

                                            </button>
                                            <label>Privacidade</label>
                                        </div>
                                        <div class="col">
                                            <button type="button" class="btn btn-info btn-floating">
                                                <i class="fas fa-language fa-lg"></i>
                                            </button>
                                            <label>Idioma</label>
                                        </div>
                                        <div class="col">
                                            <button type="button" class="btn btn-info btn-floating">
                                                <i class="fas fa-info fa-lg"></i>
                                            </button>
                                            <label>
                                                Informações
                                            </label>
                                        </div>


                                        <div
                                            class="modal fade"
                                            id="exampleModal"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div>
                                                <div class="modal-dialog modal-lg w-100">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Opções de Privacidade</h5>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-mdb-dismiss="modal"
                                                                aria-label="Close"
                                                            ></button>
                                                        </div>

                                                        <div class="modal-body">

                                                            <div class="form-check">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="flexCheckDefault"
                                                                />
                                                                <label class="form-check-label" for="flexCheckDefault">Eu aceito os termos de licença</label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="flexCheckDefault1"
                                                                />
                                                                <label class="form-check-label text-left" for="flexCheckDefault1">Eu quero receber novidades por email</label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input
                                                                    class="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="flexCheckDefault2"
                                                                />
                                                                <label class="form-check-label" for="flexCheckDefault2">Eu quero receber novidades pelo site</label>
                                                            </div>
                                                            <br></br>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <a href="/Historico" class="btn btn-info btn-sm">Histórico de modificação</a>
                                                            <button type="button" class="btn btn-success btn-sm">Termos de Licença</button>                                                      
                                                            <button type="button" class="btn btn-danger btn-sm" data-mdb-dismiss="modal">Salvar</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>

                        <div class="card-footer">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Perfil;

