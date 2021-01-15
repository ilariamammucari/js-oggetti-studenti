// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo oggetto
var studente = {
    nome: 'Mickey',
    cognome: 'Mouse',
    eta: 12
};

// stampo tutte le proprietà
for ( var key in studente ){
    console.log(studente[key]);
}

// creo arrey di oggetti
var studenti = [
    {
        nome: 'Mickey',
        cognome: 'Mouse',
        eta: 12
    },
    {
        nome: 'Donald',
        cognome: 'Duck',
        eta: 15
    },
    {
        nome: 'Paperon',
        cognome: 'Depaperoni',
        eta: 45
    }
];

// stampo le proprietà richieste dall'esercizio
for ( var i = 0; i < studenti.length; i++ ){
    console.log( studenti[i].nome,studenti[i].cognome );
}

// faccio aggiungere un oggetto all'utente con dei prompt
var nome = prompt('Inserisci un nome');
var cognome = prompt('Inserisci un cognome');
var eta = parseInt(prompt('Inserisci l\'età'));


// controlli per assicurarmi che si inserisca un numero e sui caratteri del nome e cognome
nome = nome.charAt(0).toUpperCase() + nome.substr(1).toLowerCase();
cognome = cognome.charAt(0).toUpperCase() + cognome.substr(1).toLowerCase();

while ( isNaN(eta) || eta <= 0 ){
    alert('Attento!! Devi inseriri la tua età con un numero.');
    var eta = parseInt(prompt('Inserisci l\'età'));
}


var oggettoUtente = {
    nome: nome,
    cognome: cognome,
    eta: eta
};

// lo inserisco nell'arrey
studenti.push(oggettoUtente);

// stampo tutti le proprietà di tutti gli oggetti che sono nell'arrey
for ( var i = 0; i < studenti.length; i++ ){
    for ( var key in studenti[i] ){
        console.log( studenti[i][key] );
    }
}

