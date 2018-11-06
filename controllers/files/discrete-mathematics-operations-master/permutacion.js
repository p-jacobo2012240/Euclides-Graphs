$( document ).ready( function () {
  $( "#onclickPermu" ).click( function () {
    let n = parseInt($("#inputNPermutacion").val().trim());
    let r = parseInt($("#inputRPermutacion").val().trim());
    if (r > n) {
      Materialize.toast('"R" no puede ser mayor a "N"', 3000);
    } else {
      let newN = 1;
      for (let i = 1; i <= n; i++) {
          newN = newN * i;
      }
      let resta = n - r;
      var resultadoEneMenorR = 1;
      for (let i = 1; i <= resta; i++) {
          resultadoEneMenorR = resultadoEneMenorR * i;
      }
      $("#resultadoPermutacion")
        .text(newN/resultadoEneMenorR)
        .hide()
        .show('slow');
    }
  } );
} );
