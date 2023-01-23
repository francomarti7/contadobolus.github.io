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
            confirmButtonColor:'#00ADB5',
            html:'El nivel de boludos esta subiendo considerablemente! &#x1F628;',
          })
    }  else if (contador%8===0){
        Swal.fire({
            icon: 'warning',
            title: 'ALERTA',
            html: 'Nivel de boludos CRITICO, tomate un descanso&#10071;&#10071; <br> <br> <strong> DESEA RETIRARSE? </strong> ',
            iconColor: '#FF0000',
            confirmButtonColor: '#00ADB5',
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

    if (contador == 1){
      Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        html: "Hoy viste " +contador+ " boludo! &#128169;",
        confirmButtonColor: '#00ADB5',
      })

    contador=0;
    h2.textContent=contador;
    localStorage.setItem("contador", contador);
    return;

    } else if (contador>1){
      Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          html: "Hoy viste " +contador+ " boludos! &#128169;",
          confirmButtonColor: '#00ADB5',
        })

      contador=0;
      h2.textContent=contador;
      localStorage.setItem("contador", contador);

    } else {
      Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        html: "Hoy no viste boludos! &#128512;",
        confirmButtonColor: '#00ADB5',
      })
    }
 }

agregar.onclick = sumar;
fin.onclick = final;