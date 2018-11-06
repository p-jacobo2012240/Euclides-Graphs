$( document ).ready( function () {
  $( '#mySelect' ).change( function () {
    if (document.getElementById("inner").hasChildNodes()) {
      $( "#inner" ).empty();
    }
    let html = null;
    let value = $( this ).val();
    for ( var x = 0; x < value; x++ ) {
      html = `<div class="input-field">
          <input id="conjunto${x + 1}" type="text" class="validate">
          <label for="conjunto${x + 1}">Conjunto ${x + 1}</label>
        </div>`;
      $( "#inner" ).append( html );
    }

  });

  $( "#letsoperate" ).click( function () {

    let getUnion = function () {
        let arrayConjunto1 = $( "#conjunto1" ).val().trim().split(" ");
        let arrayConjunto2 = $( "#conjunto2" ).val().trim().split(" ");
        let auxiliary = [];
        for ( let x = 0; x < arrayConjunto1.length; x++ ) {
          for ( let y = 0; y < arrayConjunto2.length; y++ ) {
            if ( arrayConjunto1[x] === arrayConjunto2[y] ) {
              let index = auxiliary.findIndex( j => {
                return j === arrayConjunto1[x];
              });
              if ( index === -1 ) auxiliary.push( arrayConjunto1[x] );
            } else {
              let indexConj1 = auxiliary.findIndex( j => {
                return j === arrayConjunto1[x];
              } );
              let indexConj2 = auxiliary.findIndex( j => {
                return j === arrayConjunto2[y];
              } );
              if ( indexConj1 === -1 ) auxiliary.push( arrayConjunto1[x] );
              if ( indexConj2 === -1 ) auxiliary.push( arrayConjunto2[y] );
            }
          }
        }
        return `<p> C1 ∪ C2 = { ${auxiliary.sort((a, b) => a - b)} }</p>`;
    }

    let getInterseccion = function () {
      let arrayConjunto1 = $( "#conjunto1" ).val().trim().split(" ");
      let arrayConjunto2 = $( "#conjunto2" ).val().trim().split(" ");
      let auxiliary = [];
      for ( let x = 0; x < arrayConjunto1.length; x++ ) {
        for ( let y = 0; y < arrayConjunto2.length; y++ ) {
          if ( arrayConjunto1[x] === arrayConjunto2[y] ) {
            let index = auxiliary.findIndex( j => {
              return j === arrayConjunto1[x];
            });
            if ( index === -1 ) auxiliary.push( arrayConjunto1[x] );
          }
        }
      }
      return `<p> C1 ∩ C2 = { ${auxiliary.sort((a, b) => a - b)} }</p>`;
    }

    let getDiferencia = function () {
      let arrayConjunto1 = $( "#conjunto1" ).val().trim().split(" ");
      let arrayConjunto2 = $( "#conjunto2" ).val().trim().split(" ");
      let auxiliary = [];
      for ( let x = 0; x < arrayConjunto1.length; x++ ) {
        for ( let y = 0; y < arrayConjunto2.length; y++ ) {
          if ( arrayConjunto1[x] !== arrayConjunto2[y] ) {
            let index = auxiliary.findIndex( j => {
              return j === arrayConjunto1[x];
            });
            if ( index === -1 ) auxiliary.push( arrayConjunto1[x] );
          } else {
            let index = auxiliary.findIndex( j => {
              return j === arrayConjunto1[x];
            });
            if ( index !== -1 ) auxiliary.splice( index, 1 );
            break;
          }
        }
      }
      return `<p> C1 ⊖ C2 = { ${auxiliary.sort((a, b) => a - b)} }</p>`;
    }

    let showToast = function (message) {
      Materialize.toast( message , 3000 );
    }

    let operation = $( "#operationSelect" ).val();
    let numeroDeConjuntos = $( "#mySelect" ).val();

    if ( numeroDeConjuntos === "2" ) {
      if (  document.getElementById("conjunto1") && document.getElementById("conjunto2") ) {
        if ( $( "#conjunto1" ).val() !== "" || $( "#conjunto2" ).val() !== "" ) {
          if (operation === "union") {
            let union = getUnion();
            $( "#result" ).append( union ).hide().show('slow');
          } else if (operation === "interseccion") {
            let interseccion = getInterseccion();
            $( "#result" ).append( interseccion ).hide().show('slow');
          } else if (operation === "diferencia") {
            let diferencia = getDiferencia();
            $( "#result" ).append( diferencia ).hide().show('slow');
          } else showToast('Operacion no seleccionada');
        } else showToast('Conjuntos vacios');
      } else showToast( 'No existen las entradas de texto');
    } else if ( numeroDeConjuntos === "3" ) {
      console.log("Tres conjuntos");
    }  else showToast( 'Cantidad de conjuntos no seleccionada' );
  });
});
