// 1. Da se napise programa koja sto dve nizi so ista dolzina kje gi spoi vo edna niza. Elementite od prvata niza treba da se zacuvaat na parnite pozicii od rezultantnata niza, a elementite od vtorata niza na neparnite pozicii od rezultantnata niza

// 2. Od proizvolna lista so broevi da se ispecati koj e najmaliot, a koj e najgolemiot broj

// 3. Od proizvolna lista so broevi da se pronajde dali ima duplikati od bilo koj element.

// 4. Od proizvolna niza so bukvi da se formira zbor, na toj nacin sto sekoja bukva kje se spoi so narednata za da formira string.

// 5. Da se napise programa koja sto kje proveri dali vo nekoja proizvolna niza ima pod-niza, i dokolku ima site elementi od podnizata da se dodadat na krajot od originalnata niza.
// Primer: [1, 2, [3, 4], 5, 6] ===> [1, 2, 5, 6, 3, 4]
console.warn("Prva zadaca");

// 1.
const niza1 = [1, 3, 5, 7, 9];
const niza2 = [2, 4, 6, 8, 10];
const niza3 = [];
let neparen = 0;
let paren = 0;
const vkupLength = niza1.length + niza2.length;
for (let i = 0; i < vkupLength; i++) {
  if (i % 2 == 0) {
    niza3[i] = niza1[paren];
    paren++;
  } else {
    niza3[i] = niza2[neparen];
    neparen++;
  }
}
console.log(niza1);
console.log(niza2);
console.log(niza3);

console.warn("Vtora zadaca");
// 2.
const randoNiza = [];
for (let i = 0; i < 5; i++) {
  randoNiza[i] = Math.trunc(Math.random() * 20 + 1);
}
let min = 21;
let max = 0;
for (let i = 0; i < randoNiza.length; i++) {
  if (min > randoNiza[i]) {
    min = randoNiza[i];
  } else if (max < randoNiza[i]) {
    max = randoNiza[i];
  }
}
console.log(randoNiza);
console.log(`Najmal e ${min}, a najgolem e ${max}`);

console.warn("Treta zadaca");
// 3.
const randoNiza2 = [];
for (let i = 0; i < 10; i++) {
  randoNiza2[i] = Math.trunc(Math.random() * 40 + 1);
}
console.log(randoNiza2);
let flag = 0;
for (let i = 0; i < randoNiza2.length; i++) {
  let proveruvanBroj = randoNiza2[i];
  for (let j = i + 1; j < randoNiza2.length - 1; j++) {
    if (proveruvanBroj === randoNiza2[j]) {
      flag = 1;
    }
  }
}
flag === 1 ? console.log("Ima identicni") : console.log("Nema identicni");

console.warn("Cetvrta zadaca");
// 4.

console.warn("Petta zadaca");
// 5.

const array = [1, 2, 3, [4, 5], 6];
console.log(array);
console.log(array[3]);
