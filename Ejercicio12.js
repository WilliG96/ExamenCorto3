function concatenarArray(array) {
    if (array.length >= 2) {
        console.log("Elemento: ", array[0], "Elemento: ", array[1]);
    } else {
        console.log("El array no tiene suficientes elementos.");
    }
}

const miArray = [347, 222];
const miArray2 = [789, 111];
concatenarArray(miArray); 
concatenarArray(miArray2); 
