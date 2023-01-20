const agregar = document.getElementById("agregar");
const fin = document.getElementById("fin");
var h2 = document.getElementById("counter");
contador= localStorage.getItem("contador") || 0;;
h2.textContent = contador;


function sumar(){
    var contador = localStorage.getItem("contador") || 0;
    contador++;
    h2.textContent=contador;
    localStorage.setItem("contador", contador);
};


function final(){
    contador=0;
    h2.textContent=contador;
    localStorage.setItem("contador", contador);
};

agregar.onclick = sumar;
fin.onclick = final;