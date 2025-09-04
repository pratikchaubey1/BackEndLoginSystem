const express = require('express');
const router  = express.Router();
const autho =  require('../middleware/autho');

router.get('/user',autho,(req,res)=>{
    return res.status(200).json({
            success:true,
            massage:"hello my dear user how are you "
    })

    
})

module.exports = router;