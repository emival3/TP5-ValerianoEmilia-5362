//defino controlador para el manejo de CRUD
const espectadorCtrl = require('./../controllers/espectador.controller');
//console           llama a la llibreria agente controller

//creamos el manejador de rutas
const express = require('express');//me permite generar rutas
const router = express.Router();
//definimos las rutas para la gestion de agente

//defino un ruta 
//la raiz =http://localhost:3000/
router.get('/', espectadorCtrl.getEspectador);//http://localhost:3000//api/agente/(url para poner en el postman y traer todos los agentes de la bd)
router.post('/', espectadorCtrl.createEspectador);
router.get('/:dni',espectadorCtrl.getUnEspectador);

//exportamos el modulo de rutas
module.exports = router;