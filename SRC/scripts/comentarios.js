document.getElementById("comForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addComentario();  // Llamamos a la función para procesar el comentario
});

let comentarioLista = [];

function addComentario() {
    let comentario = document.getElementById("com").value;
    if (comentario) {  // Verificamos que el comentario no esté vacío
        const listaCom = document.getElementById("listaCom");
        listaCom.innerHTML = '';
        
        comentarioLista.push(comentario);
        console.log(comentarioLista);
          // Mostramos la lista de comentarios después de añadir uno nuevo
        document.getElementById("com").value = '';  // Limpiamos el campo de texto

        
        for (let i = 0; i < comentarioLista.length; i++) {
            const liElement = document.createElement("li");
            liElement.textContent = comentarioLista[i];
            listaCom.appendChild(liElement);  // Añadimos el nuevo <li> al contenedor
        }
    }
}

function mostrarOcultarComentario() {
    // Obtenemos el contenedor de la lista
    const listaCom = document.getElementById("listaCom");
    
    listaCom.innerHTML = '';

    // Añadimos todos los comentarios de la lista
    for (let i = 0; i < comentarioLista.length; i++) {
        const liElement = document.createElement("li");
        liElement.textContent = comentarioLista[i];
        listaCom.appendChild(liElement);  // Añadimos el nuevo <li> al contenedor
    }
    
    // Alternamos la visibilidad de la lista
    listaCom.classList.toggle("active")
}