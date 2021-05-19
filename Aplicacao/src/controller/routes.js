//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Login from '../views/login.js';
import Perfil from '../views/perfil.js';
import Historico from '../views/historico.js';
import Cadastro from '../views/cadastro.js';


//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Cadastro" exact component={Cadastro} />
                <Route path="/Historico" exact component={Historico} />
                <Route path="/Perfil" exact component={Perfil} />

            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;