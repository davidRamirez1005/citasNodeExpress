import express from 'express';
import con from '../../server/db.js'


const appConsultadoria = express.Router();
appConsultadoria.use(express.json());
/**
 *  ! Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)
 */
appConsultadoria.get('/:usu_id', (req, res) => {
    let usu_id = req.params.usu_id;
    con.query(
        /* sql */`SELECT consultorio.*, usuario.usu_nombre, usuario.usu_primer_apellido, usuario.usu_segundo_apellido, usuario.usu_id
        FROM consultorio
        INNER JOIN usuario ON consultorio.cons_codigo = usuario.usu_id
        WHERE usuario.usu_id = ?`,
        [usu_id],
        (err, data, fields) => {
            res.send(data);
        }
    );
});


export default appConsultadoria