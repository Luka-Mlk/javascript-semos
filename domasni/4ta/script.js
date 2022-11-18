// 1. Imate niza od korisnicki email adresi.
// Da se napise funkcija koja  treba da proveri dali sekoj od mailovite e validen
// validen mail e toj mail sto im karakter "@", ".com" ili ".net" i nema prazni mesta
// Otkako ke zavrsi proverkata, treba VO NOVA niza, da se stavat site nevalidni mejlovi, dokolku ima takvi i novata niza da se ispecati

// const emails = ['test@test.com', 'test123123', 'koco@koco.net', 'test@koco.co']

// 2. Da se napise funkcija koja sto ke prima lista od iminja i preziminja
//   Funkcijata treba da proveri dali site iminja i preziminja zapocnuvaat so golema bukva,
//   i ako ne, togas da ja napravi golema. Site ostanati bukvi, treba da se pretvorat vo mali.
//   Na kraj da se ispecati nizata od transformirani iminja

// const names = ['koco nica', 'alek Dimitriev'] => ['Koco Nica', 'Alek Dimitriev']

// 3. Imame nizaod zivotni na farma.
// Sekoe zivotno e objekt i si ima svoe property broj na noze, i plus drugi svojstva
// So pomosh na posebna funkcija, farmerot treba da izbroi kolku vkupno noze ima vo farmata.

// const myAnimals = [
//   { type: 'Horse', numberOfLegs: 4 },
//   { type: 'Sheep', numberOfLegs: 4 },
//   { type: 'Chicken', numberOfLegs: 2 },
//   { type: 'Fish', numberOfLegs: 0 },
//   { type: 'Dog', age: 7, numberOfLegs: 4 },
//   { type: 'Goat', numberOfLegs: 4 }
// ] ===> TOTAL OF 18 LEGS!

// 4. Da se napise funkcija koja ke presmetuva kolku vkupno poeni
// osvoil nekoj sportski tim
// Sportskiot tim e objekt vo koj sto imate broj na porazi,
// broj na pobedeni i broj na neresheni natprevari
// Za sekoja pobedena timot dobiva 3 poeni, za nereshena 1, a za izgubena -2

// const team = {
//   wins: 3,
//   losses: 4,
//   draws: 2
// } ==> total points: 7

// 5. Listata od knigi sto ja rabotevme na chas, da se sortira po azbucen rodosled spored imeto na avtorot

// 1.
console.warn("Prva zadaca");
// raboti
function validMail(str) {
  const checker = /[\w\.-]+@[\w\.-]+/;
  return checker.test(str);
}
// console.log(validMail("mail@mail.net"));
// pocetni mailovi
const emails = ["test@test.com", "test123123", "mail@mail.net", "test@use.com"];
// filtrirani mailovi
const validMailsArr = [];
// funkcija za mailovi
function mailFilter(allEmails) {
  allEmails.reduce((currentMail, goodmail) => {
    if (validMail(goodmail)) {
      validMailsArr.push(goodmail);
      return validMailsArr;
    }
    return currentMail;
  }, "");
  return validMailsArr;
}
const filteredMail = mailFilter(emails);
console.log(`Validni mailovi se ${filteredMail}`);

// 2.
console.warn("Vtora zadaca");
const names = ["koco nica", "alek Dimitriev"];
const name = "koco nica";
function capitalize(persons) {
  let words = persons.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}
const capitalizedNames = names.map(capitalize);
console.log(capitalizedNames);

// 3.
console.warn("Treta zadaca");
const myAnimals = [
  { type: "Horse", numberOfLegs: 4 },
  { type: "Sheep", numberOfLegs: 4 },
  { type: "Chicken", numberOfLegs: 2 },
  { type: "Fish", numberOfLegs: 0 },
  { type: "Dog", age: 7, numberOfLegs: 4 },
  { type: "Goat", numberOfLegs: 4 },
];
function legCounter(animals) {
  let sumOfLegs = 0;
  animals.forEach((animal) => {
    sumOfLegs += animal.numberOfLegs;
  });
  console.log(`Total of => ${sumOfLegs} LEGS`);
}
legCounter(myAnimals);

// 4.
console.warn("Cetvrta zadaca");
const team = {
  wins: 3,
  losses: 4,
  draws: 2,
};
function pointsCalc(team) {
  return team.losses * -2 + team.wins * 3 + team.draws * 1;
}
console.log(`Total points: ${pointsCalc(team)}`);
// 5.
console.warn("Petta zadaca");
const myBooks = [
  {
    // author: "b", testovi
    author: "Fyodor Dostoyevsky",
    name: "Crime and punishment",
    year: 1887,
    ISBN: 1,
    price: 500,
    read: false,
  },
  {
    // author: "A A",testovi
    author: "J.K. Rowling",
    name: "Harry Potter",
    year: 2000,
    ISBN: 2,
    price: 600,
    read: false,
  },
  {
    author: "J.R.R. Tolkien",
    name: "The Hobbit",
    year: 1910,
    ISBN: 3,
    price: 1000,
    read: true,
  },
];
function alphaSort(someBooks) {
  someBooks.sort((a, b) => {
    if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
    else return -1;
  });
  console.log(someBooks);
}
console.log(alphaSort(myBooks));
