console.log("Hellow word")

//..Codigo del cuadrado
console.group("Cuadrados");


function perimetroCuadrado(lado){
    return lado*4 ;
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Codigo para el triángulo

console.group("Triángulos")//------------------>Grupo

 function perimetroTriangulo(lado1,lado2,lado3){
    return lado1+lado2+lado3;
 }

function areaTriangulo(base, altura){
    return (base * altura)/2; 
}

console.groupEnd();//fin del grupo Triángulo

//Codigo para circulo
console.group("Círculos");

function diametroCirculo (radio)
{
    return radio * 2;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo (radio);
    return diametro * Math.PI;
}

function areaCirculo(radio)
{
    return Math.PI * (radio * radio);
}


console.groupEnd();