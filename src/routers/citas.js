import express from 'express';
import con from '../../server/db.js'


const appCitas = express.Router();
appCitas.use(express.json());
/**
 *  ! Obtener todas las citas alfabéticamente
 */
appCitas.get('/:id?', (req, res) => {
(req.params.id)
    con.query(
    /* sql */'SELECT cita.*, usuario.usu_nombre, usuario.usu_primer_apellido FROM cita INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id ORDER BY usuario.usu_nombre, usuario.usu_primer_apellido',
    (err, data, fils) => {
    res.send(data);
    },
    );
});
export default appCitas