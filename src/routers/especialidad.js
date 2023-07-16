import express from 'express';
import con from '../../server/db.js'
import { plainToClass } from 'class-transformer';


const appEspecialidad = express.Router();
appEspecialidad.use(express.json());
/**
 *  ! Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
 */
appEspecialidad.get('/:id?', (req, res) => {
(req.params.id)
    con.query(
    /* sql */'SELECT cita.*, usuario.usu_nombre, usuario.usu_primer_apellido FROM cita INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id ORDER BY usuario.usu_nombre, usuario.usu_primer_apellido',
    (err, data, fils) => {
    res.send(data);
    },
    );
});
export default appEspecialidad