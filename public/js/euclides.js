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
    
    let rest = euc(dat1, dat2)
    
    console.log(rest)
}


function  euc( n_1, n_2){
    return (!n_2) ? n_1 : euc(n_2 , n_1 % n_2);
}


/*
int mcd(int x , int y){
  int t;
  x = (x < 0) ? -x:x;
  y = (y < 0) ? -y:y;
  t = (x < y) ? x : y;
  while ( (x % t) || (y % t))
    --t;
  return t;
}
*/