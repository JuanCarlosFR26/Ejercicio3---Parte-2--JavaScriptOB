
function esPrimo(num) {

    for(let i = 2, raiz=Math.sqrt(num); i <= raiz; i++) {
        if(num % i === 0) {
            return false;
        }
        return num > 1;
    }

}

for(let i = 0; i <= 12; i++) {
    if(esPrimo(i)) {
        console.log("El número " + i + " es un Número Primo")
    }
}