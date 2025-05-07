const mongooose  = require('mongoose')
function connecToDb(){
   
        mongooose.connect(process.env.MONGO_URI).then(()=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
module.exports = connecToDb