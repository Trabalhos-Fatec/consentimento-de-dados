# 🎲 Banco De Dados


********************************
## Indice

  1. [Tabela permissões](#tb_1) </br>
    1-2. [Criação da tabela no Banco de Dados](#tb_1_db)
  2. [Tabela cliente](#tb_2) </br>
    2-2. [Criação da tabela no Banco de Dados](#tb_2_db)

********************************

<div id='tb_1'/>  

## Tabela permissões


<div id='tb_1'/>  

### Sobre

A tabela de permissões é responsável por armazenar a opção (de forma binária) que o usuario informa na plataforma 
<a href="https://github.com/Trabalhos-Fatec/consentimento-de-dados/blob/main/README.md">Tutube</a> sobre como consentir ao uso de seus dados.



<div id='tb_1_db'/>  

### Criação da tabela de permissões

```
CREATE TABLE pnl_permissoes (
    id_perm INTEGER AUTO_INCREMENT UNIQUE NOT NULL,
    cad_aceite_termo DATE,
    notifica_email BINARY,
    notifica_sms BINARY,
    id_user INTEGER,
    
	PRIMARY KEY(id_perm),
	FOREIGN KEY (id_user)
  INDEX (cad_aceite_termo, notifica_email, notifica_sms));
```


<div id='tb_2_db'/>  

### Criação da tabela de clientes

```
CREATE TABLE pnl_cliente (
    id_user INTEGER AUTO_INCREMENT UNIQUE NOT NULL,
    data_nascimento DATE,
    email VARCHAR(30),
    telefone VARCHAR(15),
    
	PRIMARY KEY(id_user);
```
