const mongoose = require('mongoose');//importo la libreria de moongose
const { Schema } = mongoose; //en mongoose hay una libreria schema entonces la injecto en este objeto
//con la libreria de schema creo mis objetos

const ProductoSchema = new Schema({
    //defino el esquema y va a tener atributos y valores
    nombre: {type:String,required:true},
    descripcion: {type:String,required:true},
    imagen: {type:String,required:true}, //url de una imagen para mostrar
    precio: {type:Number,required:true},
    stock: {type:Number,required:true},
    destacado: {type:Boolean,required:true}
})

//nombre del modelo y va a apuntar a agenteSchema
// es si ya esta creado se respeta lo creado,sino se crea uno nuevo                            
module.exports = mongoose.models.Producto || mongoose.model('Producto', ProductoSchema);