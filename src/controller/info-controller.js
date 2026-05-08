const info = (req,res)=>{
  return res.json({
    success: true,
    message: "Welcome to Airgo API's",
    error:{},
    data:{},
  })
}

module.exports = {
    info
}