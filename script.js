// MENU HAMBURGUESA

const hamburguesa =
document.getElementById("hamburguesa");

const menu =
document.getElementById("menu");

hamburguesa.addEventListener("click", () => {

    menu.classList.toggle("active");

});


// MODO OSCURO

const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


// BUSCADOR Y FILTRO

const buscador =
document.getElementById("buscador");

const filtro =
document.getElementById("filtro");

const productos =
document.querySelectorAll(".card");

function filtrarProductos(){

    const texto =
    buscador.value.toLowerCase();

    const categoria =
    filtro.value;

    productos.forEach(producto => {

        const nombre =
        producto.querySelector("h3")
        .textContent
        .toLowerCase();

        const coincideTexto =
        nombre.includes(texto);

        const coincideCategoria =
        categoria === "todos" ||
        producto.classList.contains(categoria);

        if(
            coincideTexto &&
            coincideCategoria
        ){

            producto.style.display = "block";

        }else{

            producto.style.display = "none";
        }

    });

}

buscador.addEventListener(
    "keyup",
    filtrarProductos
);

filtro.addEventListener(
    "change",
    filtrarProductos
);


// CATEGORIAS VISUALES

const categorias =
document.querySelectorAll(".categoria");

categorias.forEach(categoria => {

    categoria.addEventListener("click", () => {

        const filtroCategoria =
        categoria.dataset.filter;

        productos.forEach(producto => {

            if(
                producto.classList.contains(
                    filtroCategoria
                )
            ){

                producto.style.display = "block";

            }else{

                producto.style.display = "none";
            }

        });

    });

});


// =========================
// CARRUSEL AUTOMATICO
// =========================

let slideIndex = 0;

const slides =
document.querySelectorAll(".slides");

function mostrarSlides(){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slideIndex++;

    if(slideIndex > slides.length){

        slideIndex = 1;
    }

    slides[slideIndex - 1]
    .classList.add("active");

}

mostrarSlides();

setInterval(mostrarSlides, 3000);

// BOTON VOLVER ARRIBA

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