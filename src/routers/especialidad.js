import express from 'express';
import con from '../../server/db.js'
import { plainToClass } from 'class-transformer';


const appEspecialidad = express.Router();
appEspecialidad.use(express.json());
/**
 *  ! Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
 */
appEspecialidad.get('/:especialidad?', (req, res) => {
    let especialidad = req.params.especialidad;
    con.query(
        /* sql */`SELECT medico.*, especialista.esp_nombre
        FROM medico
        INNER JOIN especialista ON medico.med_especialidad = especialista.esp_id
        WHERE especialista.esp_nombre = ?`, [especialidad],
        (err, data, fields) => {
            res.send(data);
        }
    );
});


export default appEspecialidad