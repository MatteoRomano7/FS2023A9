/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

    let l1 = parseFloat(prompt("Primo lato"))
    let l2 = parseFloat(prompt("Secondo lato"))
    function areaRettangolo (l1,l2) {
    return (l1*l2)
    
    }
    const AreaTotale = areaRettangolo(l1,l2);
    console.log(AreaTotale)


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


    let num1 = parseFloat(prompt("Primo numero"))
    let num2 = parseFloat(prompt("Secondo numero"))
    function crazySum(num1, num2){
        if (num1===num2) {return  (num1 + num2)*3
            
        } else {return  num1 + num2
            
        }
    }
    const risultatoSomma = crazySum(num1, num2)
    console.log (risultatoSomma)



/*ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

let num3 = parseInt(prompt("Numero per differenza"))
function crazyDiff(num3) {
    if (num3<= 19) {return Math.abs(num3 - 19)
        
    } else {return Math.abs(num3 - 19)*3
        
    }
}
const diff19 = crazyDiff(num3)
console.log(diff19)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let num4 = parseInt(prompt("Numero per vero o falso"))
function boundary(num4) { 
    if (num4 > 20 && num4 < 100 || num4==400 ) return true} 
    return false;

    console.log(boundary(num4))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let num6 = parseInt(prompt("Verifica se il numero sia multiplo di 3 e 7"))
function check3and7(num6) {if (num6 % 3 === 0 && num6  %7 ===  0) {return true;} else {return false;
    
}}
console.log (check3and7(num6) + " Il numero " + num6 + " è divisibile per 3 e 7")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const italianoVero = "Lasciatemi cantare con la chitarra in mano";

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(italianoVero));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const inizMaius = " libera i tuoi pensieri o finiranno per ucciderti";

function Maiuscole(str) {
  let splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
  }
  return splitStr.join(" ");
}

console.log(Maiuscole(inizMaius))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const taglia = "-Never wanna leave this bed-";

function cutString(str) {
  let splitStr = str.split("");
  splitStr.shift();
  splitStr.pop();

  return splitStr.join("");
}

console.log(cutString(taglia));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const randomNumGen = 10;

function giveMeRandom(n) {
  let ArrayNum = [];

  for (let i = 0; i < n; i++) {
    ArrayNum.push(Math.floor(Math.random() * 11));
  }
  return ArrayNum;
}

console.log(giveMeRandom(randomNumGen));
