// ==========================
// MENU HAMBURGUESA
// ==========================

const hamburguesa =
document.querySelector(".menu-toggle");

const nav =
document.querySelector("nav");

hamburguesa.addEventListener("click", () => {

    nav.classList.toggle("active");
});

// ==========================
// MODO OSCURO
// ==========================

const darkBtn =
document.querySelector("#darkModeToggle");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");
});

// ==========================
// BOTON VOLVER ARRIBA
// ==========================

const btnArriba =
document.getElementById("btnArriba");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnArriba.style.display = "block";

    }else{

        btnArriba.style.display = "none";
    }
});

btnArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});

// ==========================
// BUSCADOR + FILTRO
// ==========================

const buscador =
document.getElementById("buscador");

const filtro =
document.getElementById("filtroCategoria");

const productos =
document.querySelectorAll(".card");

function filtrarProductos(){

    const texto =
    buscador.value.toLowerCase();

    const categoria =
    filtro.value;

    productos.forEach(producto => {

        const nombre =
        producto.dataset.nombre.toLowerCase();

        const categoriaProducto =
        producto.dataset.categoria;

        const coincideTexto =
        nombre.includes(texto);

        const coincideCategoria =

            categoria === "todos" ||

            categoriaProducto === categoria;

        if(coincideTexto && coincideCategoria){

            producto.style.display = "";

        }else{

            producto.style.display = "none";
        }
    });

}
// ==========================
// CATEGORIAS VISUALES
// ==========================

const categorias =
document.querySelectorAll(".categoria");

categorias.forEach(categoria => {

    categoria.addEventListener("click", () => {

        const valor =
        categoria.dataset.filter;

        filtro.value = valor;

        filtrarProductos();
    });
});

buscador.addEventListener(
    "input",
    filtrarProductos
);

filtro.addEventListener(
    "change",
    filtrarProductos
);