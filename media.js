console.log("HOLAAAAA");
/* 
const lista = [
    100,
    200,
    400,
    400000000,
];
 */
//----------------------------------------------->
function calcularMediana(lista)
{

    lista.sort(function(a, b){return a - b});//Ordena de menor a mayor
    
    console.log(lista);
    const mitad = parseInt(lista.length/2);

    function esPar(numerito)
    {
        
            if (numerito % 2===0){
                return true;
            } else{
                return false;
            }
    }   
    
    let mediana;
    
    if (esPar(lista.length)){
        const elemento1=lista[mitad-1];
        const elemento2=lista[mitad]
        const promedioElemento1y2= calcularMediaAritmetica([elemento1, elemento2]);
    
        mediana=promedioElemento1y2; 
    
    
    }else{
        mediana=lista[mitad]
    
    }

    return mediana;
}



//----------------------------------------------->

//--------------------------------------------------->Calcular promedio
function calcularMediaAritmetica(lista){

    //   let sumaLista = 0;
    
    /* for(let i=0;i<lista.length;i++){
        sumaLista =sumaLista + lista[i];
    }
     */ 
    
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedio = sumaLista / (lista.length);
    return promedio;
    }

///---------------------------------------------------->

/* const numeros = [3, 23, 12];

const cool = numeros.sort(function(a, b){return a - b});

console.log (cool);
console.log (cool); */