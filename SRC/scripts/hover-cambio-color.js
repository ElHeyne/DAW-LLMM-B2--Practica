let elements = document.getElementsByClassName("menu-container");

for (let element of elements) {
    element.addEventListener("mouseover", (event) => {
        if (event.currentTarget.classList.contains("modo-claro")) {
            event.currentTarget.style.backgroundColor = "var(--clear-dark-gray)";
        } else {
            event.currentTarget.style.backgroundColor = "var(--dark-gray)";
        }
    });

    element.addEventListener("mouseout", (event) => {
        event.currentTarget.style.backgroundColor = "";
    });
}