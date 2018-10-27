console.log('hola euclides')

var numerito = document.getElementById("numerito");


function validarNumero(){
    event.preventDefault();
    var obj = {
        val_num : numerito.value
    }
    
    let total_num = obj.val_num
    console.log(`tu numero de cantidades a intresar es : ${total_num}`)
    esuno(total_num)
}


function esuno(x){
    if(x == 1){
        console.log(`al numero de cantidades: ${x} no puede generar un MCD`)
    }else{
        if(x == 2){
            console.log(`Tu numero si puede ser evaluado por euclides es ${x}`)
            $('#modaldosados').modal('show')
        }
        if(x == 3){
            console.log(`Tu numero si puede ser evaluado por euclides es ${x}`)
            $('#modaldosados').modal('show')
        }
        if(x == 4){
            console.log(`Tu numero si puede ser evaluado por euclides es ${x}`)
            $('#modaldosados').modal('show')
        }
    }
}