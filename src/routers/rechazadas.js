import express from 'express';
import con from '../../server/db.js'


const appRechazadas = express.Router();
appRechazadas.use(express.json());
/**
 *  ! Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
 */
appRechazadas.get('/:mes', (req, res) => {
    const mes = req.params.mes;
    con.query(
        /* sql */`SELECT cita.cit_fecha, usuario.usu_nombre, usuario.usu_segundo_nombre, usuario.usu_primer_apellido, usuario.usu_segundo_apellido, medico.med_nombreCompleto
        FROM cita
        INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
        INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProfesional
        WHERE cita.cit_estado = 3
        AND MONTH(cita.cit_fecha) = ?`,
        [mes],
        (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error en el servidor');
            } else {
                res.send(data);
            }
        }
    );
});






export default appRechazadas