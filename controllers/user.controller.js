const userModel = require('../models/user')

export.default('/', (req,res) => {
    res.status(200).json({
        "message": "route is working",
        "status": "ok"
    })
})