let elements = document.getElementsByClassName("menu-container");

for (let element of elements) {
    element.addEventListener("mouseover", (event) => {
        event.currentTarget.style.backgroundColor = "var(--clear-dark-gray)";
    });

    element.addEventListener("mouseout", (event) => {
        event.currentTarget.style.backgroundColor = "";
    });
}