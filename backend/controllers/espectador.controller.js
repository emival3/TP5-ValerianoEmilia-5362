const Espectador = require('../models/espectador');//importo el model
const espectadorCtrl = {}//comiena vacio y despues se define 

          
espectadorCtrl.getEspectador = async (req, res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);    
}
espectadorCtrl.createEspectador = async (req, res) => {
    console.log(req.body);//me va a mostrar el body que defini en el postmna
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({
            'status': '1',
            'msg': 'Espectador guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
espectadorCtrl.getUnEspectador = async (req, res) => {
    const espectador = await Espectador.find({dni: req.params.dni});
    res.json(espectador);
}

module.exports = espectadorCtrl; 
