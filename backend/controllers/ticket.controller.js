const Ticket = require('../models/ticket');//importo el model
const ticketCtrl = {}

//muestra todos los ticktes
ticketCtrl.getTickets = async (req, res) => {//siempre cunado las solicitudes vienen por http se reciben obetos el req y el res
   var tickets = await Ticket.find().populate("espectador"); //atraves del schema hay un metodo que se llama find que va a devolver todos los agentes que se encuentren en bs
    res.json(tickets);
}

ticketCtrl.getTicketbyId = async (req, res) => {//siempre cunado las solicitudes vienen por http se reciben obetos el req y el res
    const ticket = await Ticket.findById(req.params.id).populate("espectador");
  res.json(ticket);
 }

 //recuperar tickets que  sean espectadores locales o extranjeros
 ticketCtrl.obtenerTicketsPorCategoria = async (req, res) => {
    let criteria = {};
    if (req.query.categoriaE != null && req.query.categoriaE!= "") {
      criteria.categoriaEspectador = req.query.categoriaE;
    }
    var tickets = await Ticket.find(criteria).populate("espectador");
    res.json(tickets);
  };

//crea tickets
ticketCtrl.createTicket = async (req, res) => {
    console.log(req.body);//me va a mostrar el body que defini en el postmna
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({
            'status': '1',
            'msg': 'Agente guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
 

//modificar un ticket
ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, vticket);
        res.json({
            'status': '1',
            'msg': 'Agente updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//elimina ticket
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: '1',
            msg: 'Agente removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = ticketCtrl; 

//crea un objeto agente controller y lo exporta