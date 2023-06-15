const Producto = require('../models/producto');//importo el model
const productoCtrl = {}  

//get todos los productos
productoCtrl.getProductos = async (req, res) => {//siempre cunado las solicitudes vienen por http se reciben obetos el req y el res
    //    el request es lo que se manda del fronted, lo que se pide y el response es lo que devuelve el metodo
    var productos = await Producto.find(); //atraves del schema hay un metodo que se llama find que va a devolver todos los agentes que se encuentren en bs
    // va  a llamar al schema y seva a conectar a la bd
    
    res.json(productos);
}


//post
productoCtrl.createProducto = async (req, res) => {
    console.log("creandoooo");
    console.log(req.body);//me va a mostrar el body que defini en el postmna
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

//get producto destacado
productoCtrl.getProductoDestacado = async (req, res) => {
    console.log("ENTRANDO A PRODUCTOS DESTACADOS");
    let criteria = {};
    if (req.query.destacadoP != null && req.query.destacadoP!= "") {
      criteria.destacado = req.query.destacadoP;
    }
    var productos = await Producto.find(criteria);
    res.json(productos);
}

//put
productoCtrl.editProducto = async (req, res) => {
    const vprod = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, vprod);
        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//delete
productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: '1',
            msg: 'Producto removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = productoCtrl; 

//crea un objeto agente controller y lo exporta