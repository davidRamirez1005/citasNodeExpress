import express from 'express';
import con from '../../server/db.js'
import { plainToClass } from 'class-transformer';


const appPacientes = express.Router();
appPacientes.use(express.json());
/**
 *  ! Metodo GET listar los pacientes en orden alfabetico
 */
appPacientes.get('/:id?', (req, res) => {
(req.params.id)
? con.query(
    /* sql */`SELECT * FROM usuarios WHERE id=${req.params.id}`,
    (err, data, fils) => {
    res.send(data);
    },
)
: con.query(
    /* sql */'SELECT * FROM usuarios ORDER BY usu_nombre',
    (err, data, fils) => {
    res.send(data);
    },
    );
});
export default appPacientes