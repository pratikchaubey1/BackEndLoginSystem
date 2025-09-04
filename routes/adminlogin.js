const express = require('express');
const router  = express.Router();
const admin =  require('../middleware/Admin');
const autho = require('../middleware/autho');


router.get('/admin',autho,admin,(req,res)=>{
    return res.status(200).json({
            success:true,
            massage:"hello my dear user how are you "
    })

    
})

module.exports = router;