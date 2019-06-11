console.log('este es el controlador de Grafos')
//https://matdisc2018-qvsphbvlpf.now.sh
var xdesde = document.getElementById("inD")
var xhacia = document.getElementById("inH") 
var numer = document.getElementById("numerito")

var nodos = [];  
var lineas = [];

<<<<<<< HEAD
      console.log(edgesAux[0] )
      console.log(nodesAux)
      
    $("#formGrafos").submit(function (event) {
        let desde = $("#inputDesde").val();
        let hacia = $("#inputHacia").val();
=======
var camino_mas_corto = [];
var costo = new Array();
>>>>>>> d6abd5dd18ecbe0646bc9be2beaf08af68c783d3

function grafo(){
    event.preventDefault() 
    var obj = {
        xdesde : inD.value,
        xhacia : inH.value
    }

    let desde = obj.xdesde;
    let hacia = obj.xhacia;

    console.log(obj)

    costo.push(obj)
    console.log(costo)

    costo.forEach( function(key){
        console.log(key)
    })
  
    nodos.push({ data: { id: desde } });
    nodos.push({ data: { id: hacia } });
    lineas.push({ data: { source: desde, target: hacia } });

    window.cy = cytoscape({
        container: document.getElementById('cy'),
        boxSelectionEnabled: false,
        autounselectify: true,
        layout: {
            name: 'dagre'
        },

        style: [
            {
                selector: 'node',
                style: {
                    'content': 'data(id)',
                    'text-opacity': 0.5,
                    'text-valign': 'center',
                    'text-halign': 'right',
                    'background-color': '#11479e'
                }
            },

            {
                selector: 'edge',
                style: {
                    'curve-style': 'bezier',
                    'width': 4,
                    'target-arrow-shape': 'triangle',
                    'line-color': '#9dbaea',
                    'target-arrow-color': '#9dbaea'
                }
            }
        ],

        elements: {
            nodes: [...nodos],
            edges: [...lineas]
        },
    });

    $("#inD").val("");
    $("#inH").val("");
} 

function caminomascorto(){
    event.preventDefault();
    var cam_cort = {
        numer: numerito.value    
    }
    let n =  cam_cort.numer
    let pars = conv_dat(n)
   
    for(var i=1; i<=pars; i++ ){
        let non = prompt('Ingrese un numero')
        costo.push(non)
    }
    console.log(costo)
}

function conv_dat(x){
    let resp = parseInt(x)
    return resp
}