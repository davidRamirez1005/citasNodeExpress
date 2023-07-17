import express from 'express';
import con from '../../server/db.js'


const appCitaPaciente = express.Router();
appCitaPaciente.use(express.json());
/**
 *  ! Obtener los consultorio donde se aplicó las citas de un paciente
 */
appCitaPaciente.get('/', (req, res) => {
    con.query(
        /* sql */`SELECT consultorio.*, usuario.usu_nombre, usuario.usu_segundo_nombre, usuario.usu_primer_apellido, usuario.usu_segundo_apellido
        FROM consultorio
        INNER JOIN usuario ON consultorio.cons_codigo = usuario.usu_id`,
        (err, data, fields) => {
            res.send(data);
        }
    );
});


export default appCitaPaciente