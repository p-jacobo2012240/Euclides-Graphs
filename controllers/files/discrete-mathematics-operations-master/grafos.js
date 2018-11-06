$(document).ready(function () {

    let nodesAux = [];
    let edgesAux = [];


    $("#formGrafos").submit(function (event) {
        let desde = $("#inputDesde").val();
        let hacia = $("#inputHacia").val();

        nodesAux.push({ data: { id: desde } });
        nodesAux.push({ data: { id: hacia } });
        edgesAux.push({ data: { source: desde, target: hacia } });

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
                nodes: [...nodesAux],
                edges: [...edgesAux]
            },
        });

        $("#inputDesde").val("");
        $("#inputHacia").val("");

        event.preventDefault();
    });
});
