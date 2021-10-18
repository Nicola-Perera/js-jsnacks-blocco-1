// JSnack 9: Calcola la somma e la media dei primi 10 numeri.

let number = -1;
let summ = 0;
let average = 0;
for (let i = 0; i < 10; i++) {
    ++number
    summ += number;
    average = summ / (number + 1);
    
    console.log(number, summ, average);
   
}

