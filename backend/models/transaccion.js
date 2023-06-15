const mongoose = require('mongoose');//importo la libreria de moongose
const { Schema } = mongoose; //en mongoose hay una libreria schema entonces la injecto en este objeto
//con la libreria de schema creo mis objetos

const TransaccionSchema = new Schema({
    //defino el esquema y va a tener atributos y valores
    monedaOrigen: {type:String,required:true},
    cantidadOrigen: {type:Number,required:true},
    monedaDestino: {type:String,required:true},
    cantidadDestino: {type:Number,required:true},
    emailCliente: {type:String,required:true},
    tasaConversion: {type:Number,required:true} // Dato que ingresa el cliente, y se ha utilizado para calcular cantidadDestino
})

//nombre del modelo y va a apuntar a agenteSchema
// es si ya esta creado se respeta lo creado,sino se crea uno nuevo                            
module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);