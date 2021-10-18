// JSnack 7: Stampa le potenze di 2 fino a 1000.

/*
 STEPS: creo un loop con indice che parte da 0;
        ad ogni giro elevo il 2 a quell'indicie;
        eseguo il loop fin tanto che il risultato è minore o uguale di 1000;
        stampo tutti i risultati a schermo;
*/            

const base = 2;
let exp = 0;
 while (base ** exp <= 1000) {
     const power = base ** exp;
     console.log (power);
     exp++
 }