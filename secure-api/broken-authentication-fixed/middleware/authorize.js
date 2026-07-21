function authorize(requiredRole) {

    return (req,res,next) => {
        if(req.user.role === requiredRole){
            next()
        } else {
            return res.status(403).json({
                message: "Forbidden"
            })
        }
    }
}


module.exports = authorize;