import express from 'express';
import con from '../../server/db.js'
import { plainToClass } from 'class-transformer';


const appMedEspecifico = express.Router();
appMedEspecifico.use(express.json());
/**
 *  ! Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
 */
appMedEspecifico.get('/:usu_id', (req, res) => {
    let usu_id = req.params.usu_id;
    con.query(
        /* sql */`SELECT cita.*, usuario.usu_nombre, usuario.usu_primer_apellido
        FROM cita
        INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
        WHERE usuario.usu_id = ?`,
        [usu_id],
        (err, data, fields) => {
            res.send(data);
        }
    );
});


export default appMedEspecifico