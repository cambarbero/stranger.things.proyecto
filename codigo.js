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

countdownDate = new Date("Jul 1, 2022 00:00:00").getTime()

interval = setInterval(function(){
    now = new Date().getTime();

    distance = countdownDate - now;

    dias = Math.floor( distance / (1000 * 60 * 60 * 24) );
    horas = Math.floor( (distance % (1000*60*60*24)) / (1000*60*60) );
    minutos = Math.floor( (distance % (1000*60*60)) / (1000*60) );
    segundos = Math.floor( (distance % (1000*60)) / (1000) );

    $dias.innerHTML = dias;
    $horas.innerHTML = horas;
    $minutos.innerHTML = minutos;
    $segundos.innerHTML = ("0" + segundos).slice(-2);

}, 1000);

// -------------
