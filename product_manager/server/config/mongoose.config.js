const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/productsdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log("established a database connection"))
    .catch( err => console.log("Something went wrong when connecting to the database", err))
