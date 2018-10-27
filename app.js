const express = require ('express')
const app = express()

app.use( express.static( __dirname + '/public'))

let port = 3000

app.listen( port, ()=>{
    console.log(`
    Servidor Online  ->  ${port}
`)
})