const express = require('express');
const cors = require('cors')
const app = express();
require('./server/config/mongoose.config'); 
const port = 8000;
app.use(cors());
app.use(express.json());
require('./server/routes/test.routes')(app); 
app.listen(port, () => console.log(`Listening on port: ${port}`) );