
const {StatusCodes} = require('http-status-codes')
function validateCreateRequest(req,res,next){
   if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            message:'modelNumber not provided in post request for airplane',
            data:{},
            err:{explanation:'Model Number not found in incoming request'}
        })
   }
   next();
}

module.exports={
    validateCreateRequest
}