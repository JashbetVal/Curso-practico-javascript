console.log("HOLAAAAAAAAAAAAA!")


function calcularMediaGeo(lista){
const multiplicarLista = lista.reduce(
    function (valorAcumulado = 0 , nuevoElemeto)
    {
        return valorAcumulado * nuevoElemeto;
    }
);

const multiplicacion = multiplicarLista;
mediageo = Math.pow(multiplicacion,(1/lista.length));
    return mediageo;
}