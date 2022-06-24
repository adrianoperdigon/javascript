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

const formCaja = document.querySelector(".formCaja"); 
const inputNombreBusqueda = document.querySelector("#busquedaNombre"); 
const inputId = document.querySelector("#busquedaId"); 
const caja = document.querySelector(".caja"); 


//api
const buscarPorId = (id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      } else {
        caja.innerHTML += `<div>
        <img src="${data.image}">
        <h4>${data.name}</h4>
        <p>${data.species}</p>
        <p>${data.status}</p>
        </div>`;
      }
    })
    .catch((error) => {
      console.warn(error);
      caja.innerHTML = `<h2>${error}</h2>`;
    });
};

const escucharForm = () => {
  formCaja.addEventListener("submit", (e) => {
    e.preventDefault();
    buscarPorId(inputId.value);
  });
};

//dark mode
const check =document.getElementById("check")

if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}

checkStatus()

function checkStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        check.checked = true;                                       
        document.getElementsByTagName("p")[0].style.color="white";   
        document.body.style.backgroundColor = "#181A1B";
        document.getElementsByTagName("h3")[0].style.color="white"; 
        document.getElementsByTagName("label")[0].style.color="white"; 
  
  
           
    }else{
        check.checked = false;
        document.getElementsByTagName("p")[0].style.color="black";  
        document.body.style.backgroundColor = "#FFF";
    }
}

function changeStatus(){                                            
    if (localStorage.getItem('darkMode')==="true"){                 
        localStorage.setItem('darkMode', "false");                  
        document.getElementsByTagName("p")[0].style.color="black";  
        document.body.style.backgroundColor = "#FFF";
    } else{
        localStorage.setItem('darkMode', "true");                  
        document.getElementsByTagName("p")[0].style.color="#FFF";
        document.body.style.backgroundColor = "#181A1B";
        document.getElementsByTagName("h3")[0].style.color="white";
   

    }
}

document.querySelector("#btnComprar").addEventListener('click', function(){
  Swal.fire({
    title: 'Confirma que desea comprar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo continuar'
    
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Exito!',
        'Tu pago ha sido realizdo con exito.',
        'success'
      )
    }
  })
});

escucharForm();