hoy = new Date();
año = hoy.getFullYear();
mes = hoy.getMonth() + 1;
dia = hoy.getDate();
document.getElementById("fecha-de-hoy").innerHTML = "Hoy es " + dia + "/" + mes + "/" + año;

// -------------
const $dias = document.getElementById('dias'),
$horas = document.getElementById('horas'),
$minutos = document.getElementById('minutos'),
$segundos = document.getElementById('segundos');
const FechaObjetivo = new Date('Jul 1, 2022 00:00:00').getTime();

let interval = setInterval(function(){
    
    const FechaActual = new Date().getTime();

    
    let distancia = FechaObjetivo - FechaActual;

    
    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60 )) / (1000));

    
    $dias.innerHTML = dias;
    $horas.innerHTML = horas;
    $minutos.innerHTML = minutos;
    $segundos.innerHTML = ('0' + segundos).slice(-2);

  }, 1000);

// -------------

function aud_play_pause() {
    let myAudio = document.getElementById("musica");
    if (myAudio.paused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }

// -------------

function ver_mas_o_menos() {
    let masTexto = document.getElementById("mas");
    let botonTexto = document.getElementById("boton");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

function ver_mas_o_menos2() {
    let masTexto = document.getElementById("mas2");
    let botonTexto = document.getElementById("boton2");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

  function ver_mas_o_menos3() {
    let masTexto = document.getElementById("mas3");
    let botonTexto = document.getElementById("boton3");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

  function ver_mas_o_menos4() {
    let masTexto = document.getElementById("mas4");
    let botonTexto = document.getElementById("boton4");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

  function ver_mas_o_menos5() {
    let masTexto = document.getElementById("mas5");
    let botonTexto = document.getElementById("boton5");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

  function ver_mas_o_menos6() {
    let masTexto = document.getElementById("mas6");
    let botonTexto = document.getElementById("boton6");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

  function ver_mas_o_menos7() {
    let masTexto = document.getElementById("mas7");
    let botonTexto = document.getElementById("boton7");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

  function ver_mas_o_menos8() {
    let masTexto = document.getElementById("mas8");
    let botonTexto = document.getElementById("boton8");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

  function ver_mas_o_menos9() {
    let masTexto = document.getElementById("mas9");
    let botonTexto = document.getElementById("boton9");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

  function ver_mas_o_menos10() {
    let masTexto = document.getElementById("mas10");
    let botonTexto = document.getElementById("boton10");
  
    if (masTexto.style.display === "none"){
      botonTexto.innerHTML = "Leer menos";
      masTexto.style.display = "inline";
    }
    else{
      botonTexto.innerHTML = "Leer más";
      masTexto.style.display = "none";
    }
  }

// -------------

function enviar_verificar(){
  let OpcionIngles = document.formulario.ingles.value; 
  let OpcionCondiciones = document.getElementById("terminos-y-condiciones");  

  if (OpcionCondiciones.checked === true && OpcionIngles === "Bajo"){
    alert("No cumplis con el nivel de inglés requerido")
  }
  if (OpcionCondiciones.checked === true && OpcionIngles != "Bajo" ){
    alert("Formulario enviado")
  }
  else{
    alert("No podemos aceptarte el formulario sin haber aceptado los terminos y condiciones")
  }
}

// -------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides2(slideIndex);

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides3(slideIndex);

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides4(slideIndex);

function plusSlides4(n) {
  showSlides4(slideIndex += n);
}

function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides4");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides5(slideIndex);

function plusSlides5(n) {
  showSlides5(slideIndex += n);
}

function showSlides5(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides5");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides6(slideIndex);

function plusSlides6(n) {
  showSlides6(slideIndex += n);
}

function showSlides6(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides6");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides7(slideIndex);

function plusSlides7(n) {
  showSlides7(slideIndex += n);
}

function showSlides7(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides7");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides8(slideIndex);

function plusSlides8(n) {
  showSlides8(slideIndex += n);
}

function showSlides8(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides8");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides9(slideIndex);

function plusSlides9(n) {
  showSlides9(slideIndex += n);
}

function showSlides9(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides9");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlides10(slideIndex);

function plusSlides10(n) {
  showSlides10(slideIndex += n);
}

function showSlides10(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides10");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}