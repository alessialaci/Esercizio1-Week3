//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/

var petPreferito = 'criceto';
var PetPreferito = 'coniglio';

var $pet = 'giraffa';
console.log($pet); // funziona (in console)

var _pet = 'leone';
console.log(_pet); // funziona (in console)

var _pet2 = 'pantera';
document.write(_pet2); // funziona

// var 12 = 'numero'; -- non funziona, il nome di variabile non può essere un numero


/* Mio codice */

document.getElementById('ciao').innerHTML = 'Ciao a tutti';

document.getElementById('prova').innerHTML = _pet; // funziona anche con nome di variabile

var primoNumero = 5;
var secondoNumero = 8;

console.log(primoNumero + secondoNumero); // in console, somma delle due variabili

document.write(primoNumero + secondoNumero); // aggiunge la somma alla fine del documento html

document.getElementById('frase').innerHTML += 'Studia!'; // con += il contenuto viene aggiunto a quello dell'html