const a = prompt();
const znak = prompt();
const b = prompt();
if ((a == 0 || b == 0) && znak == "/") {
  console.log("nedozvolen znak");
} else if (znak === "+") {
  let suma = Number(a) + Number(b);
  console.log(suma);
} else if (znak === "-") {
  let razlika = Number(a) - Number(b);
  console.log(razlika);
} else if (znak === "*") {
  let zbir = Number(a) * Number(b);
  console.log(zbir);
} else if (znak === "/") {
  let kolicnik = Number(a) / Number(b);
  console.log(kolicnik);
} else if (znak === "%") {
  let ostatok = Number(a) % Number(b);
  console.log(ostatok);
}
