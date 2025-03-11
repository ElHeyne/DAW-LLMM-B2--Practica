const carrImg = document.getElementById("carrImg");
const carr1 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5ae195f-e639-4f3e-87e0-6199d10d2fb9/dg3f60k-f735d986-9a62-451d-aea8-93715c83cb04.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1YWUxOTVmLWU2MzktNGYzZS04N2UwLTYxOTlkMTBkMmZiOVwvZGczZjYway1mNzM1ZDk4Ni05YTYyLTQ1MWQtYWVhOC05MzcxNWM4M2NiMDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DG3v4xVPcOQ59YkFVUmLDOrTYW8Z123GIB-9qUNXczw";
const carr2 = "https://media.tenor.com/vHP0kGJV8p4AAAAe/plankton-spongebob.png";
const carr3 = "https://media.tenor.com/bzJGRPXmczoAAAAe/uncanny-plankton.png";
const carr4 = "https://i.ytimg.com/vi/lGwdmQ-xDYs/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGD4gVihlMA8=&rs=AOn4CLAUWnGxpT1mmB1KUil2ag4ciyjb-Q";
const carr5 = "https://us-tuna-sounds-images.voicemod.net/36124b4b-6172-4e2c-87ea-185737d8437d-1721316059280.jpg";

let carrLista = [carr1,carr2,carr3,carr4,carr5];
let carrPosicion = 1;
carrImg.src=carrLista[carrPosicion];

function carruselSiguiente(){
    if (carrPosicion==carrLista.length -1) {
        carrPosicion = 0;
    }else {
        carrPosicion++;
    }
    carrImg.src=carrLista[carrPosicion];
}

function carruselAnterior(){
    if (carrPosicion==0) {
        carrPosicion = carrLista.length -1;
    }else {
        carrPosicion = carrPosicion - 1;
    }
    carrImg.src=carrLista[carrPosicion];
}