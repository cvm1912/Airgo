const info = (req,res)=>{
  return res.status(200).json({
    success: true,
    message: "Welcome to Airgo API's",
    error:{},
    data:{},
  })
}

module.exports = {
    info
}