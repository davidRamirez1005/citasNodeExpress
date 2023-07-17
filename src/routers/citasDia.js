import express from 'express';
import con from '../../server/db.js'


const appCitasDia = express.Router();
appCitasDia.use(express.json());
/**
 *  ! Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
 */
appCitasDia.get('/:cit_fecha?', (req, res) => {
    let cit_fecha = req.params.cit_fecha;
    con.query(
        /* sql */`SELECT cita.*, usuario.usu_id, usuario.usu_nombre, usuario.usu_segundo_nombre, usuario.usu_primer_apellido, usuario.usu_segundo_apellido
        FROM cita
        INNER JOIN usuario ON cita.cit_codigo = usuario.usu_id
        WHERE cita.cit_fecha = ?`,
        [cit_fecha],
        (err, data, fields) => {
            res.send(data);
        }
    );
});


export default appCitasDia