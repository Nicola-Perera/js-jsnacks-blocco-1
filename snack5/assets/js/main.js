/*
    JSnack 5: Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero,
    se è dispari inseriscilo nell’array.
*/

/*
 STEPS: creo un ciclo a 6 giri;
        ad ogni giro chiedo all'utente di inserire un numero intero;
        se il numero inserito è dispari allora lo inserisco in un array;
 */

const oddNumbers = [];

for (let i = 0; i < 5; i++) {
    const number = parseInt(prompt('inserisci un numero intero'));

    if (number % 2 != 0) {
        oddNumbers.push(number);
    }
}