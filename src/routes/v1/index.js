const express = require('express');
const router = express.Router();

router.get('/info', (req,res)=>{
    return res.json({message:"Welcome to Airgo API's"})
});

module.exports = router;
