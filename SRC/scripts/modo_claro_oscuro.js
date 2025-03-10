var claro = false;

function modo_claro_oscuro() {
    let mode_toggle = document.getElementById("toggle");

    /*BODY*/
    document.querySelectorAll("body").forEach(el => el.classList.toggle("modo-claro"));

    /*CONTENEDORES*/
    document.querySelectorAll(".menu-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".card-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".title-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".side-title-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".text-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".one-image-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".big-image-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".video-container").forEach(el => el.classList.toggle("modo-claro"));

    /*FUENTES*/
    document.querySelectorAll("p").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("b").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("i").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("h1").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("h2").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".top-nav-link").forEach(el => el.classList.toggle("modo-claro"));

    /*LISTAS*/
    document.querySelectorAll("ul").forEach(el => el.classList.toggle("modo-claro"));

    /*FORMULARIOS*/
    document.querySelectorAll(".form-alergenos").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("input").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("label").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".dropdown-content").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".form-registro").forEach(el => el.classList.toggle("modo-claro"));
   
    /*TABLE*/
    document.querySelectorAll("table").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("th").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("td").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".menu-table").forEach(el => el.classList.toggle("modo-claro"));

    /*NAVBAR*/
    document.querySelectorAll("#top-nav-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("#bottom-nav-container").forEach(el => el.classList.toggle("modo-claro"));
    
    /*OTROS*/
    document.querySelectorAll("button").forEach(el => el.classList.add("modo-claro"));

    if (mode_toggle.classList.contains("bx-sun")){
        mode_toggle.classList.replace("bx-sun", "bx-moon");
    } else {
        mode_toggle.classList.replace("bx-moon", "bx-sun");
    }

    if (document.body.classList.contains("modo-claro")) {
        localStorage.setItem("modo", "claro");
    } else {
        localStorage.setItem("modo", "oscuro");
    }
}

// Aplicar el modo guardado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    let mode_toggle = document.getElementById("toggle");
    let modoGuardado = localStorage.getItem("modo");
    if (modoGuardado === "claro") {
        document.body.classList.add("modo-claro");

        /*CONTENEDORES*/
        document.querySelectorAll(".menu-container").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".card-container").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".title-container").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".side-title-container").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".text-container").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".one-image-container").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".big-image-container").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".video-container").forEach(el => el.classList.add("modo-claro"));

        /*FUENTES*/
        document.querySelectorAll("p").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll("b").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll("i").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll("h1").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll("h2").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".top-nav-link").forEach(el => el.classList.add("modo-claro"));

        /*LISTAS*/
        document.querySelectorAll("ul").forEach(el => el.classList.add("modo-claro"));

        /*FORMULARIOS*/
        document.querySelectorAll(".form-alergenos").forEach(el => el.classList.toggle("modo-claro"));
        document.querySelectorAll("input").forEach(el => el.classList.toggle("modo-claro"));
        document.querySelectorAll("label").forEach(el => el.classList.toggle("modo-claro"));
        document.querySelectorAll(".dropdown-content").forEach(el => el.classList.toggle("modo-claro"));
        document.querySelectorAll(".form-registro").forEach(el => el.classList.toggle("modo-claro"));
    
        /*TABLE*/
        document.querySelectorAll("table").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll("th").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll("td").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll(".menu-table").forEach(el => el.classList.add("modo-claro"));

        /*NAVBAR*/
        document.querySelectorAll("#top-nav-container").forEach(el => el.classList.add("modo-claro"));
        document.querySelectorAll("#bottom-nav-container").forEach(el => el.classList.add("modo-claro"));

        /*OTROS*/
        document.querySelectorAll("button").forEach(el => el.classList.add("modo-claro"));

        mode_toggle.classList.replace("bx-sun", "bx-moon");
    }
});