const express = require('express');
const { serverConfig, loggerConfig  }= require('./config');

const apiRoutes = require('./routes');

const app = express();
app.use('/api', apiRoutes)


app.listen(serverConfig.PORT,()=>{
    loggerConfig.info(`Successfully started the server on port ${serverConfig.PORT}`)
})

