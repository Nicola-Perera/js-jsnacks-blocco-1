// SNACK3: Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

/* STEPS: prompt per chiedere all'utente di inserire un numero;
            ripeto il prompt per 10 volte;
            salvo in una variabile ogni numero inserito dall'utente;
            faccio la somma algebrica fra le 10 variabili;
            mostro a schermo il risultato della somma;
*/          

let sum = 0;

for (let i = 0; i < 10; i++) {
    const userNumber = parseFloat(prompt("inserisci un numero. Inseriti ${i}/10"));
    sum += userNumber;
    console.log(userNumber);
    console.log(sum);
}

console.log(sum);