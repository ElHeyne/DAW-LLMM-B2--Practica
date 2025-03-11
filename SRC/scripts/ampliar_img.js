let mini = true;
function ampliarImg() {
    if (mini) {
        document.getElementById("miniImg").style.width="400px";
        document.getElementById("miniImg").style.height="400px";
        mini = false;
    }else {
        document.getElementById("miniImg").style.width="300px";
        document.getElementById("miniImg").style.height="300px";
        mini = true;
    }
}