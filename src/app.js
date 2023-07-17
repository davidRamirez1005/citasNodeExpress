import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { servidor } from '../server/db.js';
import appPacientes from './routers/pacientes.js';
import appCitas from './routers/citas.js';
import appEspecialidad from './routers/especialidad.js';
import appProxima from './routers/proximaCita.js';
import appMedEspecifico from './routers/medicoEspecifico.js';
import appConsultadoria from './routers/consultorias.js';
import appCitasDia from './routers/citasDia.js';
import appMedicoConsultorio from './routers/medicosConsultorios.js';
import appContarCitas from './routers/contarCitas.js';
import appCitaPaciente from './routers/citaPaciente.js';
import appPacienteGenero from './routers/citasPacienteGenero.js';
import appRechazadas from './routers/rechazadas.js';

dotenv.config();
const appExpress = express();

appExpress.use(express.json());

appExpress.use('/paciente', appPacientes);//http://127.0.0.1:5010/paciente
appExpress.use('/cita', appCitas);//http://127.0.0.1:5010/cita
appExpress.use('/especialidad', appEspecialidad);//http://127.0.0.1:5010/especialidad/cardiologia
appExpress.use('/proxima', appProxima)//http://127.0.0.1:5010/proxima/5
appExpress.use('/medico', appMedEspecifico);//http://127.0.0.1:5010/encontrar/2023-07-13
appExpress.use('/consulta', appConsultadoria);//http://127.0.0.1:5010/encontrar/2023-07-13
appExpress.use('/encontrar', appCitasDia);//http://127.0.0.1:5010/encontrar/2023-07-13
appExpress.use('/medCons', appMedicoConsultorio);
appExpress.use('/contar', appContarCitas); //http://127.0.0.1:5010/contar/2/2023-07-14
appExpress.use('/consultorio', appCitaPaciente); //http://127.0.0.1:5010/consultorio
appExpress.use('/atendido', appPacienteGenero); //
appExpress.use('/rechazada', appRechazadas); //http://127.0.0.1:5010/rechazada/7




appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}/`);
});

export default appExpress;