// Array d'entrepreneurs avec prénom, nom et année de naissance
var entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Fonction pour calculer l'âge à partir de l'année de naissance
function calculerAge(anneeNaissance) {
    var today = new Date();
    var age = today.getFullYear() - anneeNaissance;
    return age;
}

// Question 1: Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
var entrepreneursAnnees70 = entrepreneurs.filter(function(entrepreneur) {
    return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
});
console.log("Entrepreneurs nés dans les années 70 :", entrepreneursAnnees70);

// Question 2: Sors une array qui contient le prénom et le nom des entrepreneurs
var nomsPrenomsEntrepreneurs = entrepreneurs.map(function(entrepreneur) {
    return { prenom: entrepreneur.first, nom: entrepreneur.last };
});
console.log("Array avec prénom et nom des entrepreneurs :", nomsPrenomsEntrepreneurs);

// Question 3: Quel âge aurait chaque inventeur aujourd'hui ?
var agesDesEntrepreneurs = entrepreneurs.map(function(entrepreneur) {
    var age = calculerAge(entrepreneur.year);
    return { prenom: entrepreneur.first, nom: entrepreneur.last, age: age };
});
console.log("Âge des entrepreneurs aujourd'hui :", agesDesEntrepreneurs);

// Question 4: Trie les entrepreneurs par ordre alphabétique du nom de famille
var entrepreneursTries = entrepreneurs.slice().sort(function(a, b) {
    return a.last.localeCompare(b.last);
});
console.log("Entrepreneurs triés par ordre alphabétique du nom de famille :", entrepreneursTries);
