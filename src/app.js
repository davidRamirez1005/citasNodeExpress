import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { servidor } from '../server/db.js';
import appPacientes from './routers/pacientes.js';

dotenv.config();
const appExpress = express();

appExpress.use(express.json());

appExpress.use('/paciente', appPacientes);

appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}/`);
});

export default appExpress;