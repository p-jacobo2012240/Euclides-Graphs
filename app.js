const express = require('express')
const hbs = require('hbs')
const app = express()


app.use( express.static( __dirname + '/public') )

hbs.registerPartials( __dirname + '/views/parciales')
app.set('view engine', 'hbs')

//Render del home
app.get('/', (req, res)=>{

    res.render('home',{
        titulo: 'Proyecto Precalculo',
        saludo: 'Bienvenido :)',
        djk: 'Aplicacion -- dijkstra',
        euc: 'Aplicacion -- Euclides'
    })
})

//Render de dijkstra --Camino mas corto
app.get('/djk', (req, res)=>{

    res.render('djk',{
        titulo: 'Determina la ruta mas corta',
        desccripcion: 'Elegiste Calcular la ruta de un Grafo'        
    })
})

//Render de Euclides --MCD
app.get('/euc', (req, res)=>{

    res.render('euc',{
        titulo: 'Euclides',
        saludo: 'Elegiste utilizar el algoritmo de euclides'    
    })

})

let port = 3000

app.listen(port, ()=>{
    console.log('Servidor Online: ' +  port)
})