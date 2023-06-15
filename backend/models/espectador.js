const mongoose = require('mongoose');//importo la libreria de moongose
const { Schema } = mongoose; //en mongoose hay una libreria schema entonces la injecto en este objeto
//con la libreria de schema creo mis objetos

const EspectadorSchema = new Schema({
    //defino el esquema y va a tener atributos y valores
    apellido: {type:String,required:true},
    nombre: { type: String, required: true },
    dni: { type: String, required: true },
    email: { type: String, required: true }
})

//nombre del modelo y va a apuntar a agenteSchema
// es si ya esta creado se respeta lo creado,sino se crea uno nuevo                            
module.exports = mongoose.models.Espectador || mongoose.model('Espectador', EspectadorSchema);