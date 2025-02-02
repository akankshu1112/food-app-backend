const userForTesting = (req, res) =>{
    try {
      return res.status(200).send('<h1> hello from controller.js</h1>')
    } catch (error) {
        console.log("err in controller.js ==> ", err)
    }

}

module.exports = userForTesting;