//alert("Hola este es mi JavaScript");
let nombre = "Nixon";
console.log(nombre);



//codigo menu hamburguesa//

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("El DOM esta completamente cargado y procesado");


    const menuBtn = document.querySelector("#encabezado .checkboton");
    const listaMenu = document.querySelector("#encabezado nav .main-menu");

    menuBtn.addEventListener("click", (event) => {
        //menuBtn.classList.toggle("salir");
        listaMenu.classList.toggle("visible");
    });
});

