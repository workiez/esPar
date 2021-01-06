let numero = null; // lo dejé en undefined porque ahí iría el numero en cuestión

function parOImpar(numero){
    numero ? numero == 0 : console.log("ERROR! No podés clasificar el cero");
    if((numero !=0) && (numero % 2 == 0)){
        console.log('El número ' + numero + ' es par');
    }else if(numero != 0){
        console.log('El número ' + numero + ' es impar')
    };
}

parOImpar(numero);