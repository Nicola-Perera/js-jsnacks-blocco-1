// JSnack2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/* STEPS: tramite prompt chiedo all'utente di inserire una parola;
            tramite secondo prompt chiedo all'utente di inserire un'altra parola;
            uso un if per stampare la parola più corta seguita da quella più lunga;
*/          

// 2 words sent by user
const wordOne = prompt('scrivi una parola');
const wordTwo = prompt("scrivi un'altra parola");

// ref to shorter and longer titles 
const shorterWord = document.getElementById('shorter');
const longerWord = document.getElementById('longer');


if (wordOne.length <= wordTwo.length) {
    
    shorterWord.innerHTML = wordOne;
    longerWord.innerHTML = wordTwo;
}
else {
    
    shorterWord.innerHTML = wordTwo;
    longerWord.innerHTML = wordOne;
}