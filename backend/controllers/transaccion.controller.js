const Transaccion = require('../models/transaccion');//importo el model
const transaccionCtrl = {}  

//get todos las transaciones
transaccionCtrl.getTransacciones = async (req, res) => {
    console.log("ENTRE")
    var transacciones = await Transaccion.find(); 
    res.json(transacciones);
}


//post
transaccionCtrl.altaTransaccion = async (req, res) => {
    console.log("Dando de alta")
    console.log(req.body);//me va a mostrar el body que defini en el postmna
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion dada de alta'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransaccionPorMoneda = async (req, res) => {
    console.log("ENTRANDOOOOOOOOOOOOOOOOOOOOOOOOOO")
    criteria={};
    if(req.query.origen !=null && req.query.origen != ""){
        criteria.monedaOrigen=req.query.origen;
    }
    if(req.query.destino !=null && req.query.destino != ""){
        criteria.monedaDestino=req.query.destino;
    }
    var transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
}
//get historico de transacciones
transaccionCtrl.getHistorialTransacciones = async (req, res) => {
    const historial = await Transaccion.find({emailCliente: req.params.emailCliente});
    res.json(historial);
}





module.exports = transaccionCtrl; 

//crea un objeto agente controller y lo exporta