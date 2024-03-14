/**
 * indice validar que no sea menor a cero
 * Que el elemento exista en el array
 */

function getbyId(arr, id){
    if (id <= 0 || arr.length <= id){
        return "Elemento no existe";
    }
    return arr[id]
}

let resultado = getbyId([1, 2], 1);
console.log(resultado);