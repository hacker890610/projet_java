// Fonction pour calculer la factorielle d'un nombre
function calculerFactorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    } else {
        return nombre * calculerFactorielle(nombre - 1);
    }
}

// Demander à l'utilisateur de saisir un chiffre
var nombre = prompt("Donne un nombre je suis boubou :");

// Vérifier si l'utilisateur a saisi quelque chose
if (nombre !== null && nombre !== "") {
    // Convertir la saisie en nombre
    nombre = parseInt(nombre);

    // Vérifier si la conversion a réussi
    if (!isNaN(nombre)) {
        // Calculer la factorielle
        var resultat = calculerFactorielle(nombre);

        // Afficher le résultat
        console.log("La factorielle de " + nombre + " est : " + resultat);
    } else {
        console.log("Veuillez entrer un nombre valide.");
    }
} else {
    console.log("Vous n'avez rien saisi. Veuillez entrer un nombre.");
}
