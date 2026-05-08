const express = require('express');
const { PORT }= require('./config');

const {} = require('./controller');
const apiRoutes = require('./routes');

const app = express();
app.use('/api', apiRoutes)


app.listen(PORT,()=>{
    console.log(`Successfully started the server on port ${PORT}`);
})

