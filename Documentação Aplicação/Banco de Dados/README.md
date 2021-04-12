# 🎲 Banco De Dados


### TABELA USUARIOS

```type: sql

CREATE TABLE pnl_usuarios (
    id_usuario INTEGER NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    data_nascimento DATE,
    telefone VARCHAR(20)
);
```


### TABELA LOGINS

```

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


### TABELA TRANFERENCIA

```
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


### TABELA CONSENTIMENTO

``` 
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

### VIEW HISTORICO CONSENTIMENTO

```


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
