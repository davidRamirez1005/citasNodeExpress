CREATE DATABASE citasMedicas;

USE citasMedicas

CREATE TABLE usuario(
    usu_id INT,
    usu_nombre VARCHAR(50),
    usu_segunod_nombre VARCHAR(45),
    usu_primer_apellido VARCHAR(50),
    usu_segundo_apellido VARCHAR(45),
    usu_telefono VARCHAR(45),
    usu_direccion VARCHAR(100),
    usus_email VARCHAR(100),
    usu_tipodoc INT,
    usu_genero INT,
    usu_acudiente INT,

    PRIMARY KEY (usu_id),
    CONSTRAINT fk_tipodocTipdoc FOREIGN KEY (usu_tipodoc) REFERENCES tipo_documento(tipdoc_id),
    CONSTRAINT fk_generoGenero FOREIGN KEY (usu_genero) REFERENCES genero(gen_id),
    CONSTRAINT fk_acudienteAcudiente FOREIGN KEY (usu_acudiente) REFERENCES acudiente(acu_codigo)
)

CREATE TABLE tipo_documento(
    tipdoc_id INT,
    tipdoc_nombre VARCHAR(20),
    tipdoc_abreviatura VARCHAR(20),

    PRIMARY KEY (tipdoc_id)
)

CREATE TABLE genero(
    gen_id INT,
    gen_nombre VARCHAR(20),
    gen_abreviatura VARCHAR(20),

    PRIMARY KEY (gen_id)
)

CREATE TABLE acudiente(
    acu_codigo INT,
    acu_nombreCompleto VARCHAR(100),
    acu_telefono VARCHAR(100),
    acu_direccion VARCHAR(200),

    PRIMARY KEY (acu_codigo)
)

CREATE TABLE cita(
    cit_codigo INT,
    cit_fecha DATE,
    cit_estado INT,
    cit_medico INT,
    cit_datosUsuario INT,

    PRIMARY KEY (cit_codigo),
    CONSTRAINT fk_estadoEstadoCita FOREIGN KEY (cit_estado) REFERENCES estado_cita(estcita_id)
)

CREATE TABLE estado_cita(
    estcita_id INT,
    estcita_nombre VARCHAR(20),

    PRIMARY KEY (estcita_id)
)

CREATE TABLE medico(
    med_nroMatriculaProfesional INT,
    med_nombreCompleto VARCHAR(120),
    med_consultorio INT,
    med_especialidad INT,

    PRIMARY KEY (med_nroMatriculaProfesional),
    CONSTRAINT fk_consultorioConsultorio FOREIGN KEY (med_consultorio) REFERENCES consultorio (cons_codigo),
    CONSTRAINT fk_especialidadEspecialidad FOREIGN KEY (med_especialidad) REFERENCES especialista (esp_id)
)

CREATE TABLE especialista(
    esp_id INT,
    eso_nombre VARCHAR(20)

    PRIMARY KEY (esp_id)
)

CREATE TABLE consultorio(
    cons_codigo INT,
    cons_nombre VARCHAR(50),

    PRIMARY KEY (cons_codigo)
)