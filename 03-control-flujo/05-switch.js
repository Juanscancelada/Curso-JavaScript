let accion = "listar"

switch (accion) {
    //compara que el case y la variable tengan el mismo valor, si es verdad se ejecuta el codigo
    case "listar":
        console.log("Accion de listar");
        break;
    //como el case es listar y no guardar entonces esta linea no se ejecutara    
    case "Guardar":
        console.log("Accion de guardar");
        break;
    //si ninguna de las variables es igual se ejecuta el default
    default:
        console.log("Accion no reconocida");
}