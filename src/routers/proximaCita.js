import express from 'express';
import con from '../../server/db.js'
import { plainToClass } from 'class-transformer';


const appProxima = express.Router();
appProxima.use(express.json());
/**
 *  ! Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
 */
appProxima.get('/:usu_id', (req, res) => {
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


export default appProxima