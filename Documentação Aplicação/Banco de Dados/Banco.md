# 🎲 Banco De Dados

O banco de dados é uma parte essencial de uma aplicação. Ele é o responsável por armazenar os dados que poderão ser transformados em informações importantes para o usuário.

Nessa aplicação foi usado o banco de dados [MySql](https://www.mysql.com/). Ele é um sistema de gerenciamento de banco de dados que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de banco de dados mais populares da [Oracle Corporation](https://www.oracle.com/br/corporate/).

O banco de dados dessa aplicação possui as seguintes divisões:
* [Modelagem do Banco de Dados](#modelagem)</br>
  * [Modelo Conceitual](#conceitual)</br>
  * [Modelo Lógico](#logico)</br>
* [Codificação](#codificacao)</br>

<div id='modelagem'/>

## Modelagem do Banco de Dados
A modelagem do banco de dados é fundamental para a criação do banco, pois ela cria um modelo que explica as características de funcionamento e comportamento de um software a partir do qual ele será criado, facilitando assim o entendimento do projeto.

Para essa aplicação foi planejado a criação de cinco(5) tabelas, sendo uma delas uma view. Foi criado as seguintes tabelas:
* Logins
  * Serve para armazenar os dados de cadastro dos usuários da plataforma, como e-mail e senha.
* Usuário
  * Essa tabela armazena os dados de todos usuários da aplicação, incluindo nome, sobrenome, data de nascimento, celular e telefone no usuário.
* Consentimento
  * A tabela de consentimentos é responsável por armazenar a opção (de forma binária) que o usuário informa na plataforma 
<a href="https://github.com/Trabalhos-Fatec/consentimento-de-dados/blob/main/README.md">Tutube</a> sobre como ele consentir ao uso de seus dados, por exemplo, se ele aceita ou não receber notificações via e-mail sobre a plataforma.
* Histórico 
  * O histórico é uma tabela de view (conjunto de resultados de uma consulta armazenada sobre os dados do banco) que contém as informação das modificações dos consentimentos relaizada pelo usuário que tem os dados sobre a data e as versões das escolhas dos consentimentos do usuário.
* Transferência
  * A tabela de transferências possui os dados não sensíveis do usuário, ou seja, os dados que podem ser compartilhado com terceiros sem que haja problema.

<div id='conceitual'/>

### Modelo Conceitual

A modelagem conceitual baseia-se no mais alto nível, e deve ser usada para envolver o cliente, pois o foco desse modelo é discutir os aspectos do negócio do cliente e não da tecnologia.

<img src='https://raw.githubusercontent.com/Trabalhos-Fatec/consentimento-de-dados/main/Documenta%C3%A7%C3%A3o%20Aplica%C3%A7%C3%A3o/Banco%20de%20Dados/Modelo_Conceitual.png' size="2px">

<div id='logico'/>

### Modelo Lógico

Já o modelo lógico leva em conta algumas limitações e implementa os recursos como a adequação de nomenclatuda, definição de chaves primárias e estrangeiras, normalização, integridade referencial e entre outros.
Para a criação do modelo lógico foi levado em conta a modelagem de dados criada no modelo conceitual citado acima. 

<img src='https://raw.githubusercontent.com/Trabalhos-Fatec/consentimento-de-dados/main/Documenta%C3%A7%C3%A3o%20Aplica%C3%A7%C3%A3o/Banco%20de%20Dados/Modelo_Logico.png' size="2px">

<div id='codificacao'/>

## Codificação

### Tabela Usuários

```type: sql

CREATE TABLE pnl_usuarios (
    id_usuario INTEGER NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    data_nascimento DATE,
    telefone VARCHAR(20)
);
```


### Tabela Logins

```type: sql

CREATE TABLE pnl_logins (
    id_login INTEGER NOT NULL AUTO_INCREMENT,
    email VARCHAR(30) NOT NULL,
    senha VARCHAR(10) NOT NULL,
    id_usuario INTEGER,
    PRIMARY KEY (id_login),
    FOREIGN KEY (id_usuario)
        REFERENCES pnl_usuarios (id_usuario)
);
```


### Tabela Transferência

```type: sql
CREATE TABLE pnl_transferencia (
    id_transf INTEGER NOT NULL AUTO_INCREMENT,
    status_email INTEGER,
    status_sms INTEGER,
    status_newsletter INTEGER,
    data_modificacao DATETIME,
    data_cadastro DATETIME,
    id_usuario INTEGER,
    PRIMARY KEY (id_transf),
    FOREIGN KEY (id_usuario)
        REFERENCES pnl_usuarios (id_usuario)
);
```


### Tabela Consentimento

``` type: sql
CREATE TABLE pnl_consentimento (
    id_cons INTEGER NOT NULL AUTO_INCREMENT,
    data_modificacao DATETIME,
    termo_de_uso INTEGER,
    id_usuario INTEGER,
    id_transf INTEGER,
    PRIMARY KEY (id_cons),
    FOREIGN KEY (id_usuario)
        REFERENCES pnl_usuarios (id_usuario),
    FOREIGN KEY (id_transf)
        REFERENCES pnl_transferencia (id_transf)
);
```

### View Histórico Consentimento

```type: sql
CREATE TABLE pnl_historico (
    id_hist INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
    data_modificacao DATETIME,
    status_email VARCHAR(7),
    status_sms VARCHAR(7),
    id_usuario INTEGER,
    PRIMARY KEY (id_hist),
    FOREIGN KEY (id_usuario)
        REFERENCES pnl_usuarios (id_usuario)
); 
```
