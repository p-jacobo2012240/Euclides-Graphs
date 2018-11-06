$(document).ready(function () {
    //ejemplo: x*x*x ; x^3 
    $("#formCubica").submit(function (event) {
        functionPlot({
            target: '#cubica',
            data: [{
                fn: $("#inputCubica").val(), color: 'green'
            }]
        })

        event.preventDefault();
    });
});
