// const temps = [15, 16, 17, 20, 15, 20, 21];
// let sum = 0;
// for (let i = 0; i < temps.length; i++) {
//   sum += temps[i];
// }
// console.log(sum / temps.length);
// for (let i = 0; i < temps.length; i += 2) {
//   console.log(temps[i]);
// }

const validity = [1, 2, null, "username", 6, undefined, "password"];
const newArray = [];

for (const el of validity) {
  if (el) newArray.push(el);
}
console.log(newArray);

const newArray2 = [];
let j = 0;
for (let i = 0; i < validity.length; i++) {
  if (validity) {
    newArray2[j] = validity[i];
    j++;
  }
}
console.log(newArray2);
