//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//console           llama a la llibreria agente controller

//creamos el manejador de rutas
const express = require('express');//me permite generar rutas
const router = express.Router();
//definimos las rutas para la gestion de agente

//defino un ruta 
//la raiz =http://localhost:3000/
router.get('/', ticketCtrl.getTickets);//http://localhost:3000//api/agente/(url para poner en el postman y traer todos los agentes de la bd)
router.get("/categoria", ticketCtrl.obtenerTicketsPorCategoria);
router.get('/:id', ticketCtrl.getTicketbyId);
router.post('/', ticketCtrl.createTicket);
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);

//exportamos el modulo de rutas
module.exports = router;