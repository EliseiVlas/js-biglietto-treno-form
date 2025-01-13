// selezioniamo tutti gli elemtni della pagina di input
const nomePas = document.getElementById('nome-completo');
const killometriDaPercorrere = document.getElementById('km-percorere');
const etaPas = document.getElementById('eta');
const form = document.querySelector('form');

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
  
    const prezzoPerKillometro = 0.21;
    const prezzoBiglietto = prezzoPerKillometro * killometriDaPercorrere.value
    
        //calcolo da fare nel caso eta inferiore a 18 anni
        const scontoInferiore = (prezzoBiglietto*80/100);
        
        //calcolo da fare nel caso eta superiore a 64 anni
        const scontoSuperiore =(prezzoBiglietto*60/100)

        // ouput
        outNome.innerHTML = nomePas.value;

        //SE l'eta del passeggero e inferiore a 18 anni ha uno sconto del 20%
        if (etaPas.value < 18) {

            //sconto del 20%
            outPrezzo.innerHTML = scontoInferiore.toFixed(2) + " " + "€"
            outOfferta.innerHTML = "La vostra offerta e di 20%"
            
            //ALTRIMENTI SE l'eta del passeggero e superiore a 64 anni ha uno sconto del 40%
        }else if(etaPas.value > 64) {

            //sconto del 40%
            outPrezzo.innerHTML = scontoSuperiore.toFixed(2) + " " + "€"
            outOfferta.innerHTML = "La vostra offerta e di 40%"
            

            //Altrimenti il prezzo rimane non scontato
        }else {

            outPrezzo.innerHTML = prezzoBiglietto.toFixed(2); + " " + "€"
            outOfferta.innerHTML = "il vostro prezzo finale non e scontato"
        }    


});