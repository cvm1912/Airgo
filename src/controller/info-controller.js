const {StatusCodes} = require('http-status-codes')
const info = (req,res)=>{
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Welcome to Airgo API's",
    error:{},
    data:{},
  })
}

module.exports = {
    info
}