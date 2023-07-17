import express from 'express';
import con from '../../server/db.js'


const appMedEspecifico = express.Router();
appMedEspecifico.use(express.json());
/**
 *  ! Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
 */
appMedEspecifico.get('/:med_nroMatriculaProfesional', (req, res) => {
    let med_nroMatriculaProfesional = req.params.med_nroMatriculaProfesional;
    con.query(
        /* sql */`SELECT medico.*, usuario.usu_nombre, usuario.usu_primer_apellido, usuario.usu_segundo_apellido, usuario.usu_id
        FROM medico
        INNER JOIN usuario ON medico.med_nroMatriculaProfesional = usuario.usu_id
        WHERE medico.med_nroMatriculaProfesional = ?`,
        [med_nroMatriculaProfesional],
        (err, data, fields) => {
            res.send(data);
        }
    );
});


export default appMedEspecifico