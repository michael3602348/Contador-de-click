// *DOM
const numeros = document.getElementById("numeros");
const sumarClicks = document.getElementById("sumar");
const restarClicks = document.getElementById("restar");
const resetearClicks = document.getElementById("resetear");

// *Valor inicial del contador
numeros.textContent = 0;

// *Sumar clicks
sumarClicks.addEventListener("click", function () {
    if (numeros => 0) {
        numeros.textContent = ++numeros.textContent;
        console.log(numeros)
    }
});

// *Restar clicks
restarClicks.addEventListener("click", function () {
    if (numeros.textContent > 0) {
        numeros.textContent = --numeros.textContent;
        console.log(numeros)
    }
});

// *Resetear clicks
resetearClicks.addEventListener("click", function () {
    if (numeros => 0) {
        numeros.textContent = 0;
    }
});