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

    // Tutto il resto del codice...
    console.log("il form cerca di essere inviato");
    // prendi i selettori di output e scrivi dentro i valori presi dagli input
    title.innerHTML = titleField.value.trim();
    name.innerHTML = nameField.value.trim();
    company.innerHTML = companyField.value.trim();
    role.innerHTML = roleField.value.trim();
    email.innerHTML = emailField.value.trim();
    phone.innerHTML = phoneField.value.trim();
    // scrivo all'interno dell'attributo src del tag img
    companyPic.src = picField.value;
});