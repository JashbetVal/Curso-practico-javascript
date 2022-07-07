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
//-------------------------------------------------------->Es o no Triángulo Isóseles
function Isoseles(lado1,lado2,lado3)
{
  var altura; 

    if (lado1 === lado2){

        console.log("Si es un triangulo isóseles");
        altura = Math.sqrt ((lado1*lado1)-(lado3*lado3)/4);
        return altura;
    }
    else{
        console.log("No es isoseles");
    }
};
//--------------------------------------------------------->

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

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);//Aqui se manda a llamar la funcion de arribotaaaa
    alert(perimetro);   
}
function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");//Leemos el valor que el usuario dio en el HTML
    const value = input.value; //Sacamos el valor que el usuario dio del imput y lo metemos en la variable value
    const area = areaCuadrado(value); //Aqui se manda a llamar la funcion de arribotaaaa con el argumento de value
    alert(area);//Imprime el valor del area

}

//Triángulo
function calcularPerimetroTriangulo(){
    const input1= document.getElementById("InputTriangulo1");
    const input2= document.getElementById("InputTriangulo2");
    const input3= document.getElementById("InputTriangulo3");
    const lado1= input1.value;
    const lado2= input2.value;
    const base3= input3.value;
    const L1=Number(lado1);
    const L2=Number(lado2);
    const L3=Number(base3);
  
    console.log(L1 + L2 + L3);
    const perimetroT = perimetroTriangulo(L1,L2,L3);
    alert(perimetroT);
}

function calcularAreaTriangulo(){
    const input1= document.getElementById("InputTriangulo1");
    const input2= document.getElementById("InputTriangulo2");
    const input3= document.getElementById("InputTriangulo3");
    const lado1= input1.value;
    const lado2= input2.value;
    const base3= input3.value;
    const L1=Number(lado1);
    const L2=Number(lado2);
    const L3=Number(base3);
    //console.log(L1 + L2 + L3);
    const altura = Isoseles(L1,L2,L3);
    //console.log(altura);
    const areaT = areaTriangulo(L3,altura);
    alert(areaT);
}




//Circulo
function calcularPerimetroCirculo(){
    const input= document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);//Aqui se manda a llamar la funcion de arribotaaaa
    alert(perimetro);   
}

function calcularAreaCirculo(){
    const input= document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);//Aqui se manda a llamar la funcion de arribotaaaa
    alert(area);   
}

function calcularDiametroCirculo(){
    const input= document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);//Aqui se manda a llamar la funcion de arribotaaaa
    
    alert(diametro);   
}
