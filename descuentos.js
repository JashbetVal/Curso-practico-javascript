const precioOriginal=120;
const descuento=18;

const  Cupones = [
    "Batman",
    "Chicharito",
    "Spiderman"
]; 

function Cuponiza (ingresoDeCupon) {
    switch (ingresoDeCupon){
            case Cupones[0]:
                var Descuento = 15;
                return Descuento;
            break;
        
            case Cupones[1]:
                var Descuento = 10;
                return Descuento;
            break;
        
            case Cupones[2]:
                var Descuento = 20;
                return Descuento;
            break;
            
            default:               
                return 0;
} 
}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

function calcularPrecioConDescuento(precio, descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
return precioConDescuento;
}//final de funcion

function onClickButtonPriceDiscount(){
const inputPrice = document.getElementById("InputPrice");
const priceValue = inputPrice.value;

const inputDiscount = document.getElementById("InputDiscount"); 
const discountValue = inputDiscount.value;
const ingresoDeCupon = String(discountValue); //Aqui mete el cupon en HTML


const cupon = Cuponiza (ingresoDeCupon) ;
const precioConDescuento = calcularPrecioConDescuento(priceValue,cupon);

const resultP = document.getElementById("ResultP");
resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}