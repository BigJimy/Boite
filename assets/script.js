/* ==============================
          HORLOGE
============================== */ 

setInterval(function() {
	var currentTime = new Date()
	  , hours = currentTime.getHours()
	  , minutes = currentTime.getMinutes()
	  , seconds = currentTime.getSeconds();

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	var clockTime = hours + ":" + minutes + ":" + seconds;
	
	var clock = document.getElementById("clock");
	clock.innerText = clockTime;
	 
}, 1000);


/* ==============================
          COMPTEUR
============================== */ 

var print = function(msg) {
	document.getElementById("output").innerHTML = "La chaîne compte " + msg + " caractères.";
}

document.getElementById("strBtn").onclick = function(event) {
	print(document.getElementById('str').value.length);
}

/* ==============================
          CALCULATRICE
============================== */ 

document.getElementById("resultat").onclick = function(event) {
		document.getElementsByClassName("bubble-background")[0].style.visibility = "visible";
		display.textContent = "Mmhh... Il me semble que ca fait " + eval(calc.display.value) + " !";
		calc.display.value='';
	}

document.getElementById("cancelInput").onclick = function(event) {
	document.getElementsByClassName("bubble-background")[0].style.visibility = "hidden";
	calc.display.value = '';
	}
/* ==============================
          ADDITIONS
============================== */ 
var number1;
var number2;

number1 = Math.floor((Math.random() * 100) + 1);
number2 = Math.floor((Math.random() * 100) + 1);

document.getElementById('number1').innerHTML = number1;
document.getElementById('number2').innerHTML = number2;

var answer = number1 + number2;

var checkAnswer = document.querySelector('#inputAddition');
var value = checkAnswer.value;

var btn = document.querySelector('#btnAddition');

btn.onclick = function() {
	value = checkAnswer.value;
	if (value == answer) {
		document.getElementById("resultatAddition").innerHTML = 'Bonne réponse !';
	} else {
		document.getElementById("resultatAddition").innerHTML = 'Faux ! La réponse était ' + answer;
	}
	
	document.querySelector('#inputAddition'). value = "";
	document.getElementById('number1').innerHTML = "";
	document.getElementById('number2').innerHTML = "";
	
	number1 = Math.floor((Math.random() * 100) + 1);
	number2 = Math.floor((Math.random() * 100) + 1);

	document.getElementById('number1').innerHTML = number1;
	document.getElementById('number2').innerHTML = number2;
	
	answer = number1 + number2;
};

/* ==============================
          SLIDER
============================== */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var iSlide;
	var xSlide = document.getElementsByClassName("mySlides");
	if (n > xSlide.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = xSlide.length;
	}
	for (iSlide = 0; iSlide < xSlide.length; iSlide++) {
		xSlide[iSlide].style.display = "none";
	}
	xSlide[slideIndex-1].style.display = "block";
}

/* ==============================
         TO DO LIST
============================== */
function isChecked() {
	if(document.getElementById("isImportantField").checked === true){
		ulTask = document.querySelector("#firstList");
	} else {
		ulTask = document.querySelector("#secondList");
	}	
}

var ulTask
  , button = document.getElementById("enter")
  , input = document.getElementById("userInput")
  , inputLength = function(){return input.value.length}
  , createListElement = function() {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
		  isChecked();
			ulTask.appendChild(li);	
	}

button.addEventListener("click", function() {
	if(inputLength() > 0) {
		createListElement();
	}
})

input.addEventListener("keypress", function(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
})