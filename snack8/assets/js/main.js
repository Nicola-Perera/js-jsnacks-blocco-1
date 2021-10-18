// JSnack 8: Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

/*
 STEPS: chiedo all'utente di inserire un numero di 4 cifre;
        salvo ogni cifra all'interno di una variabile;
        faccio la somma delle 4 variabili ottenute;
*/   

let number = prompt('inserisci un numero di 4 cifre');

while (number.length != 4) {
    number = prompt('inserisci un numero di 4 cifre'); 
}
console.log(number);

let summ = 0;
for (let i = 0; i < number.length; i++) {
    const item = parseInt(number[i]);
    console.log(item);
    summ += item;
    console.log(summ);
}