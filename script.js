//arreglo
const words = [
   'californication',
   'plataforma5',
   'black',
   'summer',
   'flea',
   'aeroplane',
   'peppers',
   'unlimited',
   'arcadium',
   'love',
   'getaway',
   'stadium',
   'quixoticelixer',
   'quarter',
   'snow',
   'dylan',
   'zephyr',
   'funky',
   'chili',
];

// variables
var time = 10;
var score = 0;

// función que selecciona la palabra random y retorna una.
function palabraRandom() {
   for (var i = 0; i < words.length; i++) {
     var indice = Math.floor(Math.random(words.length) * words.length);
     return words[indice];
   }
 }
 var resultadoPR = palabraRandom();

//función que agrega una palabra random al h1
function addToDom() {
   var agregarPalabra = document.getElementById("randomWord").innerHTML=resultadoPR;
   return agregarPalabra;
}
var addToDomPalabra = addToDom();

//función que compara la palabra random con la escrita por usuario
function comparador() {
   var palabraUsuario = document.getElementById("text").value;
   if (palabraUsuario == resultadoPR) {
      
      score += 1;
      time = time + 3;
      
      document.getElementById("timeSpan").innerHTML = time + " s";
      document.getElementById("score").innerHTML = score;
      resultadoPR = palabraRandom();
      document.getElementById("text").value =("");
      
      addToDom();
      
   }
}

//var comparadorDePalabras = comparador();

let timeInterval = setInterval(actualizarTiempo, 1000);

function actualizarTiempo() {
   time = time - 1;
   if (time <= 0) {
      clearInterval(timeInterval);
      myStop();
      gameOver();

      document.getElementById("timeSpan").style.display = "none";
      document.getElementById("timeDown").style.display = "none";
      document.getElementById("scoreDown").style.display = "none";
      document.getElementById("text").style.display = "none";
  
   } else {
   document.getElementById("timeSpan").innerHTML = time + " s";
   }

   function myStop() {
      clearInterval(timeInterval);
   }
} 

function gameOver() {
   
   var finalDeJuego = document.querySelector('h1');
   finalDeJuego.textContent = "Has terminado";
   var tuPuntaje = document.createElement("p");
   tuPuntaje.textContent = "Tu puntaje es " + score;
   document.body.appendChild(tuPuntaje);
   tuPuntaje.classList.add("puntajeTotal");
   
   let btn = document.createElement("button");
   btn.innerHTML = "Comenzar denuevo"; 
   btn.onclick = function() { reiniciar() };
   document.body.appendChild(btn);
   
}

function reiniciar() {
   location.reload();
}