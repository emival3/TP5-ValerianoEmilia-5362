//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//console           llama a la llibreria agente controller

//creamos el manejador de rutas
const express = require('express');//me permite generar rutas
const router = express.Router();
//definimos las rutas para la gestion de agente

//defino un ruta 
//la raiz =http://localhost:3000/
router.get('/', transaccionCtrl.getTransacciones);//http://localhost:3000//api/agente/(url para poner en el postman y traer todos los agentes de la bd)
router.post('/', transaccionCtrl.altaTransaccion);
router.get('/moneda',transaccionCtrl.getTransaccionPorMoneda);
router.get('/:emailCliente',transaccionCtrl.getHistorialTransacciones);



//exportamos el modulo de rutas
module.exports = router;