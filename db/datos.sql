USE citasMedicas;

-- Inserciones para las tablas

-- Inserción en la tabla tipo_documento
INSERT INTO tipo_documento (tipdoc_nombre, tipdoc_abreviatura) VALUES 
('Cédula de Ciudadanía', 'CC'),
('Tarjeta de Identidad', 'TI'),
('Cédula de Extranjería', 'CE'),
('Pasaporte', 'PAS'),
('Registro Civil', 'RC'),
('Documento Nacional de Identidad', 'DNI'),
('Número de Identificación Tributaria', 'NIT'),
('Tarjeta de Residencia', 'TR'),
('Pasaporte Diplomático', 'PASD'),
('Pasaporte Oficial', 'PASO');

-- Inserción en la tabla genero
INSERT INTO genero (gen_nombre, gen_abreviatura) VALUES 
('Masculino', 'M'),
('Femenino', 'F'),
('Otro', 'O'),
('No especificado', 'NE'),
('Prefiero no decirlo', 'PND'),
('Transgénero', 'TG'),
('Cisgénero', 'CG'),
('Género fluido', 'GF'),
('No binario', 'NB'),
('Agénero', 'AG');

-- Inserción en la tabla acudiente
INSERT INTO acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) VALUES
('Luisa Pérez', '1234567890', 'Calle 123, Ciudad'),
('Pedro Gómez', '9876543210', 'Avenida 456, Ciudad'),
('María Rodríguez', '5555555555', 'Carrera 789, Ciudad'),
('Andrés Torres', '9999999999', 'Calle Principal, Ciudad'),
('Laura Sánchez', '1111111111', 'Avenida Central, Ciudad'),
('Carlos Martínez', '2222222222', 'Carrera 321, Ciudad'),
('Ana López', '3333333333', 'Calle Secundaria, Ciudad'),
('Miguel González', '4444444444', 'Avenida Principal, Ciudad'),
('Lucía García', '5555555555', 'Carrera Central, Ciudad'),
('David Romero', '6666666666', 'Calle Primaria, Ciudad');

-- Inserción en la tabla usuario
INSERT INTO usuario (usu_nombre, usu_segundo_nombre, usu_primer_apellido, usu_segundo_apellido, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES 
('Juan', 'David', 'Pérez', 'Gómez', '1234567890', 'Calle 123, Ciudad', 'juan@example.com', 1, 1, 1),
('María', 'Fernanda', 'Rodríguez', 'García', '9876543210', 'Avenida 456, Ciudad', 'maria@example.com', 2, 2, 2),
('Carlos', '', 'González', 'Sánchez', '5555555555', 'Carrera 789, Ciudad', 'carlos@example.com', 1, 1, 3),
('Ana', 'María', 'López', 'Torres', '9999999999', 'Calle Principal, Ciudad', 'ana@example.com', 3, 2, 4),
('Pedro', '', 'Ramírez', 'Sánchez', '1111111111', 'Avenida Central, Ciudad', 'pedro@example.com', 4, 3, 5),
('Luis', '', 'Martínez', 'González', '2222222222', 'Carrera 321, Ciudad', 'luis@example.com', 2, 1, 6),
('Laura', '', 'Sánchez', 'García', '3333333333', 'Calle Secundaria, Ciudad', 'laura@example.com', 1, 2, 7),
('Miguel', '', 'González', 'López', '4444444444', 'Avenida Principal, Ciudad', 'miguel@example.com', 3, 1, 8),
('Lucía', '', 'García', 'Torres', '5555555555', 'Carrera Central, Ciudad', 'lucia@example.com', 4, 2, 9),
('David', '', 'Romero', 'Sánchez', '6666666666', 'Calle Primaria, Ciudad', 'david@example.com', 5, 3, 10);

-- Inserción en la tabla estado_cita
INSERT INTO estado_cita (estcita_nombre) VALUES 
('Pendiente'),
('Confirmada'),
('Cancelada'),
('Realizada'),
('Ausente'),
('En espera'),
('En proceso'),
('Finalizada'),
('No asistió'),
('Programada');

-- Inserción en la tabla especialista
INSERT INTO especialista (esp_nombre) VALUES 
('Cardiología'),
('Dermatología'),
('Pediatría'),
('Oftalmología'),
('Gastroenterología'),
('Ginecología'),
('Urología'),
('Neurología'),
('Ortopedia'),
('Psiquiatría');

-- Inserción en la tabla consultorio
INSERT INTO consultorio (cons_nombre) VALUES 
('Consultorio A'),
('Consultorio B'),
('Consultorio C'),
('Consultorio D'),
('Consultorio E'),
('Consultorio F'),
('Consultorio G'),
('Consultorio H'),
('Consultorio I'),
('Consultorio J');

-- Inserción en la tabla medico
INSERT INTO medico (med_nombreCompleto, med_consultorio, med_especialidad) VALUES 
('Dr. Juan Pérez', 1, 1),
('Dra. Ana Rodríguez', 2, 2),
('Dr. Luis Martínez', 3, 3),
('Dra. Laura Gómez', 4, 4),
('Dr. Carlos Sánchez', 5, 5),
('Dra. María López', 6, 6),
('Dr. Andrés Torres', 7, 7),
('Dra. Lucía García', 8, 8),
('Dr. Miguel González', 9, 9),
('Dra. Sofía Martínez', 10, 10);

-- Inserción en la tabla cita
INSERT INTO cita (cit_fecha, cit_estado, cit_medico, cit_datosUsuario) VALUES 
('2023-07-13', 1, 1, 1),
('2023-07-14', 2, 2, 2),
('2023-07-15', 3, 3, 3),
('2023-07-16', 4, 4, 4),
('2023-07-17', 5, 5, 5),
('2023-07-18', 1, 6, 6),
('2023-07-19', 2, 7, 7),
('2023-07-20', 3, 8, 8),
('2023-07-21', 4, 9, 9),
('2023-07-22', 5, 10, 10);
