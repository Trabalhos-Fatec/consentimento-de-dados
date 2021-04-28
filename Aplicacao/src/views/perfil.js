import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./css/perfil.css";
import Axios from "axios";

function Perfil() {
  let [trasnfEmail, setTransfEmail] = useState("");
  let [trasnfSms, setTransfSms] = useState("");

  const updateConsentment = () => {
    if(trasnfEmail === true) trasnfEmail = 1
    else if(trasnfEmail === false) trasnfEmail = 0

    if(trasnfSms === true) trasnfSms = 1
    else if(trasnfSms === false) trasnfSms = 0

    Axios.post("http://localhost:3001/api/updateTransf", {
      statusEmail: trasnfEmail,
      statusSms: trasnfSms,
    })
    .then(() => {
      alert("Atualizado com sucesso!");
    });
    
    insertHistory();
  };

  const insertHistory = () => {
    if(trasnfEmail === true) trasnfEmail = 1
    else if(trasnfEmail === false) trasnfEmail = 0

    if(trasnfSms === true) trasnfSms = 1
    else if(trasnfSms === false) trasnfSms = 0

    Axios.post("http://localhost:3001/api/insertHist", {
        statusEmail: trasnfEmail,
        statusSms: trasnfSms,
      })
      .then(() => {
        alert("Inserido com sucesso!");
      });
  };

  return (
    <div id="divPrincipal" class="container" style={{ height: "100vh" }}>
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-5 col-sm-8">
          <div class="card text-center">
            <div class="card-header">
              <div class="row">
                <div>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg"
                    class="img-fluid rounded-circle"
                    alt=""
                  />
                  <button class="btn btn-outline btn-lg btn-floating">
                    {" "}
                    <i class="fas fa-camera"></i>{" "}
                  </button>
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
                        data-mdb-target="#exampleModal"
                      >
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
                      <label>Informações</label>
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
                              <h5 class="modal-title" id="exampleModalLabel">
                                Opções de Privacidade
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>

                            <div class="modal-body">
                              <div class="form-check">
                                <Checkbox
                                  checked= "true"
                                  id="termoDeUso"
                                  color="default"
                                />
                                <label
                                  class="form-check-label"
                                  for="termoDeUso"
                                >
                                  Eu aceito os termos de licença
                                </label>
                              </div>
                              <div class="form-check">
                              <Checkbox
                                  onChange={(e) =>
                                    setTransfEmail(e.target.checked)
                                  }
                                  
                                  id="transferenciaEmail"
                                />
                                <label
                                  class="form-check-label text-left"
                                  for="transferenciaEmail"
                                >
                                  Eu quero receber newsletter pelo email
                                </label>
                              </div>
                              <div class="form-check">
                                <Checkbox
                                  onChange={(e) =>
                                    setTransfSms(e.target.checked)
                                  }
                                  id="transferenciaSms"
                                />
                                <label
                                  class="form-check-label"
                                  for="transferenciaSms"
                                >
                                  Eu quero receber newsletter pelo site
                                </label>
                              </div>
                              <br></br>
                            </div>
                            <div class="modal-footer">
                              <a href="/Historico" class="btn btn-info btn-sm">
                                Histórico de modificação
                              </a>
                              <button
                                type="button"
                                class="btn btn-success btn-sm"
                              >
                                Termos de Licença
                              </button>
                              <button
                                type="submit"
                                class="btn btn-danger btn-sm"
                                onClick={updateConsentment}
                              >Salvar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </div>

            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Perfil;
