const agregar = document.getElementById("agregar");
const fin = document.getElementById("fin");
var h2 = document.getElementById("counter");
contador= localStorage.getItem("contador") || 0;;
h2.textContent = contador;


function sumar(){
    var contador = localStorage.getItem("contador") || 0;
    contador++;
    if (contador===5){
        Swal.fire({
            icon: 'warning',
            title: 'Cuidado',
            html:'El nivel de boludos esta subiendo considerablemente! &#x1F628;',
          })
    } 

   else if (contador%8===0){
        Swal.fire({
            icon: 'warning',
            title: 'ALERTA',
            html: 'Nivel de boludos CRITICO, tomate un descanso&#10071;&#10071; <br> <br> <strong> DESEA RETIRARSE? </strong> ',
            iconColor: '#FF0000',
            showCancelButton: true,
            confirmButtonText: 'Me quiero ir',
            cancelButtonText: 'Quiero seguir',
        }).then((result) => {
            if (result.isConfirmed) {             
              final()
            }
          })
    } 
    h2.textContent=contador;
    localStorage.setItem("contador", contador);

    
}
 ;



function final(){
    var contador = localStorage.getItem("contador") || 0;
    Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        html: "Hoy viste " +contador+ " boludos! &#128169;",
      })
    contador=0;
    h2.textContent=contador;
    localStorage.setItem("contador", contador);
};

agregar.onclick = sumar;
fin.onclick = final;