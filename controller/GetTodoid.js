// const  models = require('../models/Tool');

// const GetTodoid = async(req,res)=>{
//     try {
//         const todo = req.params.id;
//         const fetch = await models.findOne({_id:todo});
//         res.status(200).json({
//             success:true,
//             data:fetch,
//             message:"Data fetched successfully",
           
//         })
//     } catch (e){
//         console.log("error in fetching data");
//         res.status(500).json({
//             success:false,
//             message:"Error in fetching data",
//         })
//     }
// }

// module.exports=GetTodoid;
const  models = require('../models/Tool');

const GetTodoid = async(req,res)=>{
    try {
        const todo = req.params.id;
        const fetch = await models.findOne({_id:todo});
        res.status(200).json({
            success:true,
            data:fetch,
            message:"Data fetched successfully",
           
        })
    } catch (e){
        console.log("error in fetching data");
        res.status(500).json({
            success:false,
            message:"Error in fetching data",
        })
    }
}

module.exports=GetTodoid;