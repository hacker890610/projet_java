// Demander à l'utilisateur de saisir un chiffre
var nombre = prompt("Lance toi le sang j'suis chaud donne un nombre :");

// Vérifier si l'utilisateur a saisi quelque chose
if (nombre !== null && nombre !== "") {
    // Convertir la saisie en nombre
    nombre = parseInt(nombre);

    // Vérifier si la conversion a réussi
    if (!isNaN(nombre) && nombre > 0) {
        // Construire la pyramide
        for (var i = 1; i <= nombre; i++) {
            var ligne = "";
            // Ajouter des emojis à chaque ligne
            for (var j = 1; j <= i; j++) {
                ligne += "🧱"; // Vous pouvez utiliser n'importe quel emoji de votre choix
            }
            console.log(ligne);
        }
    } else {
        console.log("Oh tes serieu un nombre entier le sang!.");
    }
} else {
    console.log("Tape un truc zeubi!");
}
