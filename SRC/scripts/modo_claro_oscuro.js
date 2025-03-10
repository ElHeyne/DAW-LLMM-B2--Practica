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
    document.querySelectorAll(".dropdown-content").forEach(el => el.classList.toggle("modo-claro"));
   
    /*TABLE*/
    document.querySelectorAll("table").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("th").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("td").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll(".menu-table").forEach(el => el.classList.toggle("modo-claro"));

    /*NAVBAR*/
    document.querySelectorAll("#top-nav-container").forEach(el => el.classList.toggle("modo-claro"));
    document.querySelectorAll("#bottom-nav-container").forEach(el => el.classList.toggle("modo-claro"));

    if (mode_toggle.classList.contains("bx-sun")){
        mode_toggle.classList.replace("bx-sun", "bx-moon");
        modo="oscuro";
    } else {
        mode_toggle.classList.replace("bx-moon", "bx-sun");
        modo="claro";
    }
}