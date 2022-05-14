const saludar = ()=>{//funcion flecha que se repite hasta que se ingrese un valor por prompt
    let usuario=  prompt("Ingresa tu nombre")
    while (usuario===""){
        usuario=  prompt("Ingresa tu nombre")
    
    }
    return usuario //return usuario para poder ser utilizado por una variable global "nombreCliente"
    };
    let nombreCliente = saludar();
    console.log("Bienvenido " + nombreCliente);



//clase constructora de productos "Molde"
class Producto{
    constructor(nombre,precio,id){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;

    }
}

//creacion de productos
const cafe = new Producto("cafe",50,1)
const medialunas = new Producto("medialunas",50,2)
const te = new Producto("te",50,3)
const alfajor = new Producto("alfajor",50,4)

const listaProductos=[cafe,medialunas,te,alfajor]
const carrito=[]

const mostrarProductos = ()=>{ //funcion que recorre el array con productos y los muestra al usuario
    let nombre = "";
    listaProductos.forEach(element=>{
        nombre +=`${element.id} ${element.nombre} $${element.precio}\n` 
    }
    );

    let opcionMenu = parseInt(prompt(`Seleccione el id del producto\n${nombre}`));
    
    return opcionMenu;
};





//funcion que agrega productos al carrito
const pushearCarrito = (id)=>{ 
    id=mostrarProductos()
    let productoFind = listaProductos.find((element)=> element.id === id);
        carrito.push(productoFind);
    console.log("Los productos seleccionados son:")
    console.log(carrito)


    let seguir = confirm("Desea agregar otro producto?: ") 

    if(seguir===true) {
        
        pushearCarrito()

    }

        }

pushearCarrito()

        