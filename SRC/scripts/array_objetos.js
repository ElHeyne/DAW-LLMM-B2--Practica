//1.Array de objetos
const platos = [
    {
        idPlato: 1,
        nombrePlato: "Burguer Cangreburguer",
        descripcionPlato: "La clásica hamburguesa del crustáceo crujiente",
        precioEstandar: 1.25
    },
    {
        idPlato: 2,
        nombrePlato: "Perrito de mar salada",
        descripcionPlato: "Una alternativa de carne menos cargada",
        precioEstandar: 1.25
    },
    {
        idPlato: 3,
        nombrePlato: "Empanada dorada",
        descripcionPlato: "Para miembros de la mesa cuadrada",
        precioEstandar: 7.00
    },
    {
        idPlato: 4,
        nombrePlato: "Bits de coral",
        descripcionPlato: "Un acompañamiento ideal para cualquier plato (incluido en menús)",
        precioEstandar: 1.00
    },
    {
        idPlato: 5,
        nombrePlato: "Aros de alga",
        descripcionPlato: "Recién sacados de entre las rocas",
        precioEstandar: 1.50
    },
    {
        idPlato: 6,
        nombrePlato: "Batido de algas",
        descripcionPlato: "Esencial para tener una comida completa (incluido en menús)",
        precioEstandar: 1.00
    },
]

//Función para introducir el filtro del precio
function introducirFiltro() {
    var filtroPrecio = parseFloat(prompt("Introduce el precio máximo"))
    filtrarPorPrecioMenor(filtroPrecio);
}
//Función para sacar el nombre de los platos con un precio inferior al indicado
function filtrarPorPrecioMenor(precio) {
    let lista=document.getElementById("listaProductos");
    lista.innerHTML = "";

    for (let i = 0; i < platos.length; i++) {
        if (precio > platos[i].precioEstandar) {
            const li = document.createElement("li");
            li.textContent = platos[i].precioEstandar + " WB" + " " + platos[i].nombrePlato
            lista.appendChild(li)
            console.log(platos[i].nombrePlato)
        }
    }
}

function ordenarPorPrecio() {
    let lista=document.getElementById("listaProductos");
    lista.innerHTML = "";

    let platosOrdenados = platos.slice().sort((a, b) => a.precioEstandar - b.precioEstandar); 

    for (let i = 0; i < platosOrdenados.length; i++) {
        if (precio > platos[i].precioEstandar) {
            const li = document.createElement("li");
            li.textContent = platos[i].precioEstandar + " WB" + " " + platos[i].nombrePlato
            lista.appendChild(li)
            console.log(platos[i].nombrePlato)
        }
    }
}