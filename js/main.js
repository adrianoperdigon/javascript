console.log("Bienvenido")

const inventario =[
{
  nombre: "producto1",
  id:1,
  precio:500,
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/377px-A_small_cup_of_coffee.JPG"

},
{
  nombre: "producto2",
  id:2,
  precio:1500,
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/377px-A_small_cup_of_coffee.JPG"

},
{
  nombre: "producto3",
  id:3,
  precio:2500,
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/377px-A_small_cup_of_coffee.JPG"
}
]

const divCaja = document.getElementById("caja")
const divCarrito = document.getElementById("carrito")
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//funcion que recorre el array y crea un html por cada objeto

function crearCardProducto(){
  inventario.forEach(element => {
    divCaja.innerHTML += `
    
    <div id="caja">
    <div class="col-sm-4">
    <div class="card" style="width: 33vw;">
    <img src="${element.img}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${element.nombre}</h5>
      <p class="card-text">$${element.precio}</p>
    
      <button id="btn${element.id}"text">Agregar</button>


    </div>
    </div>
    </div>
  </div>`;

  });
  //funcion que recorre el array y ejecuta una accion por cada evento click
    inventario.forEach((producto => {
      document.querySelector(`#btn${producto.id}`).addEventListener("click", ()=>{
        enviarAlCarrito(producto)
      })
     
     
  
    }) );
}

//funcion que envia el producto al carrito
function enviarAlCarrito(producto){
  let existe = carrito.some((element => element.id === producto.id))
  if(!existe){
    carrito.push(producto);
    producto.cantidad = 1;

    }else{
      producto.cantidad++
    }
    pintarCarrito();
  }

function pintarCarrito(){
  divCarrito.innerHTML = "";
  carrito.forEach(element=>{
  divCarrito.innerHTML +=`
  <div id="caja">
    <div class="col-sm-4">
    <div class="card" style="width: 33vw;">
    <img src="${element.img}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${element.nombre}</h5>
      <p class="card-text">$${element.precio}</p>
      <p class="card-text">Cantidad: ${element.cantidad}</p>

      <button id="borrar${element.id}">Borrar</button>  


    </div>
    </div>
    </div>
  </div>`;
});
localStorage.setItem("carrito", JSON.stringify(carrito));
borrarProducto()
}

function borrarProducto() {
  carrito.forEach((producto) => {
    document
      .querySelector(`#borrar${producto.id}`)
      .addEventListener("click", () => {
        carrito = carrito.filter((element) => element.id !== producto.id);
        pintarCarrito();
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego al carrito',
        showConfirmButton: false,
       
        timer: 800
        
      })
  });
}


  crearCardProducto();



//cards creacion producto
const inputNombre = document.querySelector("#nombre"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");

const productos = [];



class Producto {
  constructor(nombre,precio, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}
function crearProducto(nombre,precio, img) {
  nombre = inputNombre.value;
  precio = inputPrecio.value;
  img = inputImg.value;
  return new Producto(nombre,precio, img);
}
function guardarProducto(producto) {
  return productos.push(producto);
}
console.log(productos);

function crearHTML() {
  let html;
  for (const producto of productos) {
    html = `
    <div>
  <div class="col-sm-3">
  <div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
  </div>
  </div>
</div>`;


    //console.log(productos);
  }
  contenedor.innerHTML += html;
}
btnGuardar.addEventListener("click", () => {
  const product = crearProducto(nombre,precio, img);
  guardarProducto(product);
  crearHTML(productos);
});




