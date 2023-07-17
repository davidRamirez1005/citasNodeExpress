import express from 'express';
import con from '../../server/db.js'


const appPacienteGenero = express.Router();
appPacienteGenero.use(express.json());
/**
 *  ! Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendida
 */
appPacienteGenero.get('/:genero?/:estado?', (req, res) => {
    let genero = req.params.genero;
    let estado = req.params.estado;
    con.query(
        /* sql */`SELECT cita.cit_codigo, cita.cit_fecha, usuario.usu_nombre, usuario.usu_segundo_nombre, usuario.usu_primer_apellido, usuario.usu_segundo_apellido, usuario.usu_genero
        FROM cita
        INNER JOIN usuario ON cita.cit_codigo = usuario.usu_id
        WHERE usuario.usu_genero = ? AND cita.cit_estado = ?`,
        [estado, genero],
        (err, data, fields) => {
            res.send(data);
        }
    );
});



export default appPacienteGenero