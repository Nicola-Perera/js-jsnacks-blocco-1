/* 
JSnack 4: In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

const partyMembers = ['matteo','marco', 'luca', 'giovanni'];
const result = document.getElementById('esito');

const userMail = prompt('inserisci la tua email');

for (let i = 0; i < partyMembers.length; i++) {
    const memberMail = partyMembers[i];

    if (userMail == memberMail) {

        const accessAccepted = 'email accettata';

        result.innerHTML = accessAccepted;
    }
}

