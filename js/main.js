
let usuario=  prompt("Ingresa tu nombre")
console.log("Bienvenido " + usuario);
let ordenTotal = 0 

menu()
function menu(){
    let opcion= parseInt (prompt(usuario + " selecciona el producto a agregar: \n \n 1 - Cafe $40 \n 2 - Chocolate $60 \n 3 - Medialunas $100 \n 4 - Alfajor $50  \n 5 - Pagar  \n 6 - Terminar programa \n      Total de la orden $"+ ordenTotal))

switch (opcion){
    case 1:
        console.log("Seleccionaste Cafe")
        alert("Seleccionaste Cafe")
        agregarAlTotal(40)
        menu();
        break;

        case 2:
        console.log("Seleccionaste Chocolate")
        alert("Seleccionaste Chocolate")

        agregarAlTotal(60)
        menu();

        break;

        case 3:
        console.log("Seleccionaste Medialunas")
        alert("Seleccionaste Medialunas")

        agregarAlTotal(100)
        menu();

        break;

        case 4:
        console.log("Seleccionaste Alfajor")
        alert("Seleccionaste Alfajor")
        agregarAlTotal(50)
        menu();

        break;

        case 5:
        console.log("Dirijase al mostrador")
        alert("Dirijase al mostrador")

        break;

        case 6:
        console.log("Terminar programa")
        break;

    default:
        console.log("Opcion no valida")
        menu();
        
}
}
function agregarAlTotal(precio){
    ordenTotal = ordenTotal + precio
    

return ordenTotal}


