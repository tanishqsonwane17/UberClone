const app  = require('./app')
const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer(app)

const { initializeSocket } = require('./socket')
initializeSocket(server)

server.listen(port,()=>{
    console.log('server is running in port' , port) 
})