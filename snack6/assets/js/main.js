// JSnack 6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

/*
    STEPS: chiedo all'utente di scrivere un numero naturale N;
            calcolo il cubo dei primi N numeri;
            mostro a schermo ogni risultato;
*/

// ref to the cubes list in html
const cubesList = document.getElementById('cubes');

const numberN = parseInt(prompt('inserisci un numero naturale'));

for (i = 0; i < numberN; i++) {
    const numberCube = i ** 3;
    cubesList.innerHTML += `<h1 class="cube">il cubo di ${i} è ${numberCube}</h1>`;
}

