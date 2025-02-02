const jwt = require('jsonwebtoken')

module.exports = async(req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token, process.env.JWT_PRIVATE_KEY, function(err, decoded) {
            if(err){
                console.log("error in token verification",err)
            }
            req.body.userID = decoded.userID // here we assign the decoded.userid to req.body
            next()
          });
    } catch (error) {
        return res.status(500).send({"message" :"please provide token", "err": error.message})
    }
}