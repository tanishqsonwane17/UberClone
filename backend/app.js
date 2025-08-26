const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const connecToDb = require('./db/db')
connecToDb()
const userRoute = require('./routes/user.routes')
const captainRoute = require('./routes/captain.routes')
const mapsRoute = require('./routes/maps.routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/maps',mapsRoute)
app.get('/',function(req,res){
    res.send('helo world')
})
app.use('/captains',captainRoute)
app.use('/users',userRoute)

module.exports = app