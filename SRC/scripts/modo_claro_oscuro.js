function modo_claro_oscuro() {
    let body = document.getElementsByTagName("body")[0];
    let mode_toggle = document.getElementById("toggle");

    body.classList.toggle("modo-claro");

    if (mode_toggle.classList.contains("bx-sun")){
        mode_toggle.classList.replace("bx-sun", "bx-moon");
        modo="oscuro";
    } else {
        mode_toggle.classList.replace("bx-moon", "bx-sun");
        modo="claro";
    }
}