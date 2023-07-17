import express from 'express';
import con from '../../server/db.js'


const appMedicoConsultorio = express.Router();
appMedicoConsultorio.use(express.json());
/**
 * ! Obtener los médicos y sus consultorios
 */
appMedicoConsultorio.get('/', (req, res) => {
    con.query(
        /* sql */`SELECT consultorio.*, medico.med_nroMatriculaProfesional, medico.med_nombreCompleto
        FROM consultorio
        INNER JOIN medico ON consultorio.cons_codigo = medico.med_consultorio`,
        (err, data, fields) => {
            res.send(data);
        }
    );
});


export default appMedicoConsultorio