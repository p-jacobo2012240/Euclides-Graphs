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

    let q =  Math.round(dat1 / dat2)  // 4
    let r = dat1 % dat2               // 20  

    let sq = Math.round( dat2 / r  - 0.25 )    // 3 
    let sr = dat2 % r                          // 10

    let tq = Math.round( r / sr )  //2
    let tc = r % sr                //0  -->detente 

    let rest = euc(dat1, dat2)

    document.getElementById("td_n1").innerHTML = dat1 
    document.getElementById("td_n2").innerHTML = dat2
    document.getElementById("td_c1").innerHTML = q
    document.getElementById("td_r1").innerHTML = r
    document.getElementById("td_c2").innerHTML = sq
    document.getElementById("td_n3").innerHTML = r 
    document.getElementById("td_r2").innerHTML = sr 
    document.getElementById("td_r2").innerHTML = sr 
    document.getElementById("td_c3").innerHTML = tq
    document.getElementById("td_n4").innerHTML = rest 
    document.getElementById("td_r3").innerHTML = 0 

    console.log(ob2)
    console.log(`tu cociente es * ${q } y tu divisor es +  ${ r}`)
    console.log(`seugnda pasada tu cociente es ${sq} y tu divisor es ${sr}`) 
    console.log(`tercera pasada tu cociente es ${tq} y tu divisor es ${tc}` )

    
    //let divis = div_dat1(dat1, dat2 )

    console.log('tu resultado de euclides es' + rest)
    
}


function  euc( n_1, n_2){
    return (!n_2) ? n_1 : euc(n_2 , n_1 % n_2)
}

//Dividiendo dato_1
function div_dat1( n_1, n_2 ){
    if( n_1 < n_2 ){
        return 0
    }else{
        return 1 + div_dat1(n_1 -n_2, n_2 )
    }
}

//Dividiendo dato_2

