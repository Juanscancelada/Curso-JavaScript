//Encontrar el numero mayor y menor de un arreglo
//iterandolo solo una vez

let array = [2, 5, 7, 15, -5, -150, 69];

function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor]
}

let numeros = getMenorMayor(array)
console.log(numeros);
