console.log("Bienvenido")


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
    <div class="row">
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
