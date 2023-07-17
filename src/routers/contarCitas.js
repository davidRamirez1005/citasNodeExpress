import express from 'express';
import con from '../../server/db.js'


const appContarCitas = express.Router();
appContarCitas.use(express.json());
/**
 *  ! Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
 */
appContarCitas.get('/:medico?/:fecha?', (req, res) => {
    let medico = req.params.medico
    let fecha = req.params.fecha;
    con.query(
        /* sql */`SELECT cita.cit_fecha, medico.med_nroMatriculaProfesional, medico.med_nombreCompleto
        FROM cita
        INNER JOIN medico ON cita.cit_codigo = medico.med_nroMatriculaProfesional
        WHERE cit_medico = ? AND cit_fecha = ?`,
        [medico, fecha],
        (err, data, fields) => {
            res.send(data);
        }
    );
});


export default appContarCitas