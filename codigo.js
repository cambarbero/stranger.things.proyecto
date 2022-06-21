hoy = new Date();
año = hoy.getFullYear();
mes = hoy.getMonth() + 1;
dia = hoy.getDate();
document.getElementById("fecha-de-hoy").innerHTML = "Hoy es " + dia + "/" + mes + "/" + año;

// -------------

$dias = document.getElementById("dias");
$horas = document.getElementById("horas");
$minutos = document.getElementById("minutos");
$segundos = document.getElementById("segundos");

const countdownDate = new Date("7 1, 2022 00:00:00").getTime()

let interval = setInterval(function(){
    const now = new Date().getTime();

    let distance = countdownDate - now;

    let dias = Math.floor( distance / (1000 * 60 * 60 * 24) );
    let horas = Math.floor( (distance % (1000*60*60*24)) / (1000*60*60) );
    let minutos = Math.floor( (distance % (1000*60*60)) / (1000*60) );
    let segundos = Math.floor( (distance % (1000*60)) / (1000) );

    $dias.innerHTML = dias;
    $horas.innerHTML = horas;
    $minutos.innerHTML = minutos;
    $segundos.innerHTML = ("0" + segundos).slice(-2);

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

