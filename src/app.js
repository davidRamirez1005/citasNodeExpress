import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { servidor } from '../server/db.js';
import appPacientes from './routers/pacientes.js';
import appCitas from './routers/citas.js';
import appEspecialidad from './routers/especialidad.js';
import appProxima from './routers/proximaCita.js';
import appMedEspecifico from './routers/medicoEspecifico.js';
dotenv.config();
const appExpress = express();

appExpress.use(express.json());

appExpress.use('/paciente', appPacientes);
appExpress.use('/cita', appCitas);
appExpress.use('/especialidad', appEspecialidad);
appExpress.use('/proxima', appProxima)
appExpress.use('/medico', appMedEspecifico);



appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}/`);
});

export default appExpress;