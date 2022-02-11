const { db } = require('../database')

module.exports = {
    getData : (req,res) => {
        console.log(req.query.username)

        let queryGet = `SELECT * FROM admin WHERE username='${req.query.username}';`

        db.query(queryGet, (err, result) => {
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            }
            return res.status(200).send(result)
        })
    }
}