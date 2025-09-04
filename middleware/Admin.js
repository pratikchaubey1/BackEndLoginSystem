
const admin = (req,res,next) => {
   const role =  req.user.role  ;
   if(role !== 'admin'){
     return res.status(403).json({
        success:false,
        massage:"only admin can access this page "
       
     })
     next();
}
    
}

module.exports = admin;
