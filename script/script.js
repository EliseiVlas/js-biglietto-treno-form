// selezioniamo tutti gli elemtni della pagina di input
const nomePas = document.getElementById('nome-completo');
const killometriDaPercorrere = document.getElementById('km-percorere');
const etaPas = document.getElementById('eta');

// prezzo biglietto in base ai km
const prezzoPerKillometro = 0.21;

// selezioniamo tutti gli elemtni della pagina di output
const outNome = document.getElementById("nome");
const outOfferta = document.getElementById('offerta');
const outPrezzo = document.getElementById('prezzo');

// tramite l'invio del form prendiamo i valori dei campi selezionati e li scriviamo nei blocchi
form.addEventListener('submit', (event) => {

    // Blocco l'invio del form..
    event.preventDefault();

    //ELABORAZIONE
    // calcolo il prezzo del percorso in base al killometraggio
    let prezzoBiglietto = (killometriDaPercorrere*prezzoPerKillometro)
    
        //calcolo da fare nel caso eta inferiore a 18 anni
        let scontoInferiore = (prezzoBiglietto*80/100);
        
        //calcolo da fare nel caso eta superiore a 64 anni
        let scontoSuperiore =(prezzoBiglietto*60/100)

     // calcolo lo sconto in base all'eta del passegero
        //SE l'eta del passeggero e inferiore a 18 anni ha uno sconto del 20%
        if (etaPas < 18) {
            //sconto del 20%
            prezzo = scontoInferiore.toFixed(2)
            console.log("Il prezzo da pagare scontato del 20% e" + " " + prezzo + "€")
            //ALTRIMENTI SE l'eta del passeggero e superiore a 64 anni ha uno sconto del 40%
        }else if(etaPas > 64) {
            //sconto del 40%
            prezzo = scontoSuperiore.toFixed(2)
            console.log("Il prezzo da pagare scontato del 40% e" + " " + prezzo + "€")

            //Altrimenti il prezzo rimane non scontato
        }else {
            prezzo = prezzoBiglietto.toFixed(2);
            console.log("Il prezzo da pagare e" + " " + prezzo + "€")
        }    

    // prendi i selettori di output e scrivi dentro i valori presi dagli input
    title.innerHTML = titleField.value.trim();
    name.innerHTML = nameField.value.trim();
    company.innerHTML = companyField.value.trim();
    role.innerHTML = roleField.value.trim();
    email.innerHTML = emailField.value.trim();
    phone.innerHTML = phoneField.value.trim();

});