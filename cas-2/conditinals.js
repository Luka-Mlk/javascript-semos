// let x = 52;
// if (x % 2 === 0) {
//   console.log("Brojot e paren");
// } else if (x === 0) {
//   console.log("Brojot e nula");
// } else {
//   console.log("Brojot e neparen");
// }

//1.pie alkohol 2.vozi kola 3.glasa na izbori
// const vozrast = prompt();
// if (vozrast >= 21) {
//   console.log("licnosta moze da gi pravi site tri");
// } else if (vozrast >= 18) {
//   console.log("licnosta moze da vozi kola i glasa na izbori");
// } else if (vozrast >= 16) {
//   console.log("licnosta moze samo da vozi kola");
// } else {
//   console.log("licnosta nemoze da pravi niedna od trite");
// }

// let vreme = Math.trunc(Math.random() * 24 + 1);
// console.log(vreme);
// if (vreme >= 0 && vreme <= 12) {
//   console.log("dobro utro");
// } else if (vreme > 12 && vreme <= 18) {
//   console.log("dobar den");
// } else {
//   console.log("dobra vecer");
// }

//mesec vo godinata
//kolku dena vo mesecot
let mesec = Math.trunc(Math.random() * 12 + 1);
console.log(mesec);
switch (mesec) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31");
    break;
  case 2:
    console.log("28");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30");
    break;
}
