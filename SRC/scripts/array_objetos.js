let ordenAscendente = true; // Control de Orden

const platos = [ // Array de Objetos
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

function introducirFiltro() {
    var filtroPrecio = parseFloat(prompt("Introduce el precio máximo")) // Se pide un precio para filtrar
    filtrarPorPrecioMenor(filtroPrecio);
}

function filtrarPorPrecioMenor(precio) {
    let lista=document.getElementById("listaProductos"); // Se obtiene y limpia la lista para introducir nuevos datos
    lista.innerHTML = "";

    platos.forEach(plato => {if(plato.precioEstandar <= precio){ // Usando el limite pedido anteriormente se rellena el elemento ul, lista del html
        let li=document.createElement("li");
        li.textContent = plato.precioEstandar + " WB" + " " + plato.nombrePlato;
        lista.appendChild(li);
    }})
}

function ordenarPorPrecio() {
    let lista = document.getElementById("listaProductos"); // Se guarda la lista original del html
    let platos = Array.from(lista.children); // Se guardan los platos (li del ul)

    let platosOrdenados = platos.map(plato => { // usando una funcion flecha se crea un array que guarda un objeto con el precio del objeto original y su contenido, copiado de los hijos
        let texto = plato.textContent;
        let precio = parseFloat(texto.split(" WB")[0]);
        return { precio: precio, elemento: plato };
    });

    platosOrdenados.sort((a, b) => ordenAscendente ? a.precio - b.precio : b.precio - a.precio); // Se usa el precio extraido anteriormente para ordenar este nuevo array

    lista.innerHTML = "";
    platosOrdenados.forEach(plato => lista.appendChild(plato.elemento)); // Se vuelve a dibujar el nuevo array teniendo en cuenta la lista copiada y ordenada

    ordenAscendente = !ordenAscendente;
}