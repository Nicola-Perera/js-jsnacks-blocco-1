// JSnack 1

// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/*
    STEPS: tramite 1 prompt chiedo all'utente di inserire un numero;
            faccio la stessa richiesta una seconda volta;
            salvo i 2 numeri inseriti dall'utente in 2 variabili distinte;
            creo un if per stampare a schermo il numero maggiore;
*/

// 2 values sent by user
const numberOne = parseFloat(prompt('scrivi un numero'));
const numberTwo = parseFloat(prompt('scrivi un secondo numero'));

// ref to result
 let result = document.getElementById('result');

// check what's the higgest value and print it
if (numberOne >= numberTwo) {
    
    result.innerHTML = numberOne;
}
else if (numberTwo >= numberOne) {

    result.innerHTML = numberTwo;
}