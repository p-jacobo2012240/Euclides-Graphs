console.log('este es el controlador de Grafos')

var xdesde = document.getElementById("inD")
var xhacia = document.getElementById("inH") 
var numer = document.getElementById("numerito")

var nodos = [];  
var lineas = [];

var camino_mas_corto = [];
var costo = new Array();

function grafo(){
    event.preventDefault() 
    var obj = {
        xdesde : inD.value,
        xhacia : inH.value
    }

    let desde = obj.xdesde;
    let hacia = obj.xhacia;

    console.log(obj)
  
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