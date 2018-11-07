console.log('este es el script de euclides')

var totaldos = document.getElementById("totaldos") 
var dato1 = document.getElementById("dato1")
var dato2 = document.getElementById("dato2")

const LIMITE = 2

function euclides(){
    event.preventDefault()
    var obj_eud = {
        valor:  totaldos.value
    }
    console.log(obj_eud)
    var ob =  obj_eud.valor
    console.log(ob)

    if(ob == LIMITE ){
        console.log('se abrira tu form')
        $('#modaleuc').modal('show')
    }else{
        console.log(`no es un proceso valido`)
        alert(`Tu valor es incorrecto no se puede obtener MCD pues es: ${ob} `)
    }

}

function resolver(){
    event.preventDefault()
    var  ob2 = {
        val1 : dato1.value,
        val2 : dato2.value
    }

    let dat1 = ob2.val1
    let dat2 = ob2.val2

    console.log(ob2)
    
     let res = division_entera(dat1, dat2)
     console.log(res)
     alert(`Tu respuesta de mcd es ${res} `)    
}


function division_entera( dividendo, divisor){
	if( dividendo < divisor ){ //Caso base
		return 0;
	}
	//caso general
	return 1 + division_entera( dividendo - divisor, divisor );
}

