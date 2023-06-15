const mongoose = require('mongoose');
const URI = 'mongodb://localhost/tp5bd'; //donde va a estar la base de datos
mongoose.connect(URI) //me conecto a la base de datos
.then(db=>console.log('DB is connected')) //puede ser exitosa o tener error
.catch(err=>console.error(err))
module.exports = mongoose; //se exporta a la base de datos
