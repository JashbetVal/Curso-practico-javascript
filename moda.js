console.log("Holaaaaaaa!");
/* const lista1=[
    1,
    2,
    3,
    3,
    5,
    7,
    10,
];
 */

function calcularModa (lista1){
const lista1Count={};

lista1.map(function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;  
        }else{
            lista1Count[elemento] = 1;
        }
        
    }
); 

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1]  -  elementoB[1];
    }
);
const moda = lista1Array [lista1Array.length - 1];

return moda;
}