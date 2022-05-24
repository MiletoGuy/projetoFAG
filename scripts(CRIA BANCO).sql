CREATE DATABASE fag_api;

USE DATABASE fag_api;

CREATE TABLE DEPARTAMENTO(
    DEP_ID INT PRIMARY KEY AUTO_INCREMENT,
    DEP_DESCRICAO VARCHAR(50) NOT NULL
);

CREATE TABLE USUARIO(
    USUARIO_ID INT PRIMARY KEY AUTO_INCREMENT,
    USUARIO_SAGRES VARCHAR(30) NOT NULL,
    USUARIO_SENHA VARCHAR(32) NOT NULL,
    USUARIO_DEPARTAMENTO INT NOT NULL
);

CREATE TABLE FORMULARIO(
    FORM_ID INT PRIMARY KEY AUTO_INCREMENT,
    FORM_DEPARTAMENTO INT NOT NULL,
    FORM_FORMULARIO JSON NOT NULL
);

CREATE TABLE ALTERACAO(
    ALT_ID INT PRIMARY KEY AUTO_INCREMENT,
    ALT_TIPO VARCHAR(30) NOT NULL
);

CREATE TABLE ALTER_USUARIO_FORM(
    ALT_USUARIO INT,
    ALT_FORMULARIO INT,
    ALT_ALTERACAO INT
);

ALTER TABLE ALTER_USUARIO_FORM ADD CONSTRAINT
PRIMARY KEY (ALT_USUARIO, ALT_FORMULARIO, ALT_ALTERACAO);

ALTER TABLE USUARIO ADD CONSTRAINT FK_USUARIO_DEP
FOREIGN KEY (USUARIO_DEPARTAMENTO) REFERENCES DEPARTAMENTO (DEP_ID);

ALTER TABLE FORMULARIO ADD CONSTRAINT FK_FORMULARIO_DEP
FOREIGN KEY (FORM_DEPARTAMENTO) REFERENCES DEPARTAMENTO (DEP_ID);


/*VISUALIZANDO USUARIOS*/
/*SELECT USUARIO_ID, USUARIO_SAGRES, USUARIO_SENHA FROM USUARIO;

/*VISUALIZADO FORMULARIOS*/
/*SELECT FORM_ID, FORM_DEPARTAMENTO, FORM_FORMULARIO 
FROM FORMULARIO;

/*VISUALIZANDO QTD DE FORMULARIOS RESPONDIDOS POR USUARIO*/
/*SELECT USUARIO_SAGRES, COUNT(*) AS "FORMULARIOS RESPONDIDOS"
FROM USUARIO
INNER JOIN ALTER_USUARIO_FORM ON USUARIO_ID = ALT_USUARIO
WHERE ALT_ALTERACAO = 2
GROUP BY USUARIO_ID
ORDER BY 2 DESC;

/*VISUALIZANDO QTD DE FORMULARIOS VISUALIZADOS POR USUARIO*/
/*SELECT USUARIO_SAGRES, COUNT(*) AS "FORMULARIOS VISUALIZADOS"
FROM USUARIO
INNER JOIN ALTER_USUARIO_FORM ON USUARIO_ID = ALT_USUARIO
WHERE ALT_ALTERACAO = 1
GROUP BY USUARIO_ID
ORDER BY 2 DESC;

/*VISUALIZANDO FORMULARIOS QUE FORAM RESPONDIDOS*/
/*SELECT FORM_ID, FORM_DEPARTAMENTO
FROM FORMULARIO
INNER JOIN ALTER_USUARIO_FORM ON FORM_ID = ALT_FORMULARIO
WHERE ALT_ALTERACAO = 2;

/*VISUALIZANDO FORMULARIOS QUE FORAM VISUALIZADOS*/
/*SELECT FORM_ID, FORM_DEPARTAMENTO
FROM FORMULARIO
INNER JOIN ALTER_USUARIO_FORM ON FORM_ID = ALT_FORMULARIO
WHERE ALT_ALTERACAO = 1;

/*VISUALIZANDO QUEM RESPONDEU CADA FORMULARIO*/
/*SELECT USUARIO_ID, USUARIO_SAGRES, ALT_FORMULARIO
FROM USUARIO
INNER JOIN ALTER_USUARIO_FORM ON USUARIO_ID = ALT_USUARIO
WHERE ALT_ALTERACAO = 2;

/*VISUALIZANDO QUEM VISUALIZOU CADA FORMULARIO*/
/*SELECT USUARIO_ID, USUARIO_SAGRES, ALT_FORMULARIO
FROM USUARIO
INNER JOIN ALTER_USUARIO_FORM ON USUARIO_ID = ALT_USUARIO
WHERE ALT_ALTERACAO = 1;
