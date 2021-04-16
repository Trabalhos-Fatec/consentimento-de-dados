//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Perfil from '../views/perfil.js';
import Historico from '../views/historico.js';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Perfil} />
                <Route path="/Historico" exact component={Historico} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;