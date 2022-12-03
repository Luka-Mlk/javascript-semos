/*
Da se napravi klasa Kafemat sto ke funkcionira kako mashina za pravenje kafe.
Ima tri parametri: voda, kafe, mleko (ovie bi bile vkupna tezina vo gramovi, 
znaci treba da se brojki). Koga ja instancirame klasata zadavame kolku vkupno grama ke ima za sekoj od ovie parametri - na primer 100g kafe, 100g mleko i 1000g voda.

Da se napravi metod koj sto ke pravi chasha kafe i koga ke go povikate da ispise 
poraka deka kafeto e gotovo. Za edna casa se potrebni 7g kafe, 100g voda i 10g mleko.
Povikajte go metodot nekolku pati za da vidite dali sostojkite vi se troshat kako sto treba, 
slicno kako na chas sto vezbavme so avtomobilite.

Dokolku go povikate metodot za pravenje na kafe, a nemate dovolno od nekoja od 
sostojkite da se ispecati kolku grama i od koja sostojka falat. 

Za kraj, klasata da ima uste edno property, koe sto ke vi kazuva kolku kafinja vkupno ste napravile. 
Pocetnata vrednost mu e nula.
*/
class Kafemat {
  #voda;
  #kafe;
  #mleko;
  #prethodniKafinja = 0;
  constructor(voda, kafe, mleko) {
    this.#voda = voda;
    this.#kafe = kafe;
    this.#mleko = mleko;
  }
  napraviKafe() {
    if (this.proveriVoda() && this.proveriKafe() && this.proveriMleko()) {
      console.log("Napraveno kafe");
      this.#voda = this.#voda - 100;
      this.#kafe = this.#kafe - 7;
      this.#mleko = this.#mleko - 10;
      this.#prethodniKafinja++;
      return true;
    } else console.log("Nedostasuva sostojka");
  }
  getPrethodniKafinja() {
    return this.#prethodniKafinja;
  }
  proveriVoda() {
    if (this.#voda >= 100) return true;
    else return false;
  }
  proveriKafe() {
    if (this.#kafe >= 7) return true;
    else return false;
  }
  proveriMleko() {
    if (this.#mleko >= 10) return true;
    else return false;
  }
}
const Lavazza = new Kafemat(200, 14, 20);
function napraviKafe() {
  while (Lavazza.napraviKafe()) {
    Lavazza.napraviKafe();
  }
  console.log(`${Lavazza.getPrethodniKafinja()} napraveni kafinja`);
}
