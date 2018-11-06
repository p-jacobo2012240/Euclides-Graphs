$(document).ready(function () {
    $("#formCombinacion").submit(function (event) {
        let n = parseInt($("#inputNCombinacion").val());
        let r = parseInt($("#inputRCombinacion").val());

        //n factorial
        var resultadoN = 1;
        for (i = 1; i <= n; i++) {
            resultadoN = resultadoN * i;
        }

        //r factorial
        var resultadoR = 1;
        for (i = 1; i <= r; i++) {
            resultadoR = resultadoR * i;
        }

        //(n-r) factorial
        if (r <= n) {
            let eneMenosErre = n - r;
            var resultadoEneMenorR = 1;
            for (i = 1; i <= eneMenosErre; i++) {
                resultadoEneMenorR = resultadoEneMenorR * i;
            }
            $("#resultadoCombinacion").text(resultadoN/(resultadoR*resultadoEneMenorR)).hide().show('slow');
        }else{
            Materialize.toast('"r" no puede ser mayor a "n"', 4000)
        }

        event.preventDefault();
    });
});
