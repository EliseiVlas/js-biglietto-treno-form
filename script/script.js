// selezioniamo tutti gli elemtni della pagina di input
const nomePas = document.getElementById('nome-completo');
const killometriDaPercorrere = document.getElementById('km-percorere');
const etaPas = document.getElementById('eta');
const form = document.querySelector('form');




// selezioniamo tutti gli elemtni della pagina di output
const outNome = document.getElementById("nome");
const outOfferta = document.getElementById('offerta');
const outPrezzo = document.getElementById('prezzo');

const kmm = killometriDaPercorrere.value;
const agg = parseInt(etaPas.value)

// prezzo biglietto in base ai km
// const prezzoPerKillometro = 0.21;
// let prezzoBiglietto = prezzoPerKillometro * kmm.value




// tramite l'invio del form prendiamo i valori dei campi selezionati e li scriviamo nei blocchi
form.addEventListener('submit', (event) => {

    // Blocco l'invio del form..
    event.preventDefault();
    console.log("provo ad inviare il form");

    //ELABORAZIONE
    // calcolo il prezzo del percorso in base al killometraggio
   
    // outPrezzo.innerHTML = killometriDaPercorrere.value;
    // outNome.innerHTML = nomePas.value;
    // outOfferta.innerHTML = etaPas.value;
    // prezzo biglietto in base ai km
    const prezzoPerKillometro = 0.21;
    const prezzoBiglietto = prezzoPerKillometro * kmm
    
        //calcolo da fare nel caso eta inferiore a 18 anni
        const scontoInferiore = (prezzoBiglietto*80/100);
        
        //calcolo da fare nel caso eta superiore a 64 anni
        const scontoSuperiore =(prezzoBiglietto*60/100)

     // calcolo lo sconto in base all'eta del passegero
        //SE l'eta del passeggero e inferiore a 18 anni ha uno sconto del 20%
        if (etaPas < 18) {
            //sconto del 20%

            outPrezzo.innerHTML = scontoInferiore.toFixed(2)
            console.log("Il prezzo da pagare scontato del 20% e" + " " + prezzo + "€")
            //ALTRIMENTI SE l'eta del passeggero e superiore a 64 anni ha uno sconto del 40%
        }else if(etaPas > 64) {

            //sconto del 40%
            outPrezzo.innerHTML = scontoSuperiore.toFixed(2)
            console.log("Il prezzo da pagare scontato del 40% e" + " " + prezzo + "€")

            //Altrimenti il prezzo rimane non scontato
        }else {

            outPrezzo.innerHTML = prezzoBiglietto.toFixed(2);
            console.log("Il prezzo da pagare e" + " " + prezzo + "€")
        }    

    // prendi i selettori di output e scrivi dentro i valori presi dagli input
    // title.innerHTML = titleField.value.trim();
    // name.innerHTML = nameField.value.trim();
    // company.innerHTML = companyField.value.trim();
    // role.innerHTML = roleField.value.trim();
    // email.innerHTML = emailField.value.trim();
    // phone.innerHTML = phoneField.value.trim();

});