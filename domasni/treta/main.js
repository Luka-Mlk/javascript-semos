// Da se napise funkcija koja kako parametri prima dva stringovi - username i password. Funkcijata treba da proveri dali username ima samo mali bukvi i minimum 8 karakteri.
// Funkcijata isto taka treba da proveri dali paswordot ima barem edna golema bukva, minimum 8 karakteri, barem eden broj i barem eden specijalen karakter (!, @, #, $, %, ^, &)

// Dokolkusite uslovi se ispolneti, funkcijata treba da ispecati "Login successful"

// Dokolku barem eden od uslovite NE e ispolnet, treba da se ispecati koj uslov ne e zadovolen (ne mora site, dovolno e eden). Primer: "Password must be at least 8 characters long"

function containsNumber(str) {
  return /\d/.test(str);
}
function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function nameChecker(name) {
  let golemaBukv = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] === name[i].toUpperCase()) {
      golemaBukv = 1;
    }
  }
  for (let i = 0; i < name.length; i++) {
    if (name.length >= 8 && golemaBukv === 0 && containsNumber(name)) {
      // console.log("Imeto e dozvoleno");
      return 1;
    } else {
      // console.log("Imeto ne e dozvoleno");
      return 0;
    }
  }
}

function passChecker(pass) {
  let golemaBukv = 0;
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] === pass[i].toUpperCase()) {
      golemaBukv = 1;
    }
  }
  for (let i = 0; i < pass.length; i++) {
    if (
      pass.length >= 8 &&
      golemaBukv === 1 &&
      containsSpecialChars(pass) &&
      containsNumber(pass)
    ) {
      // console.log("lozinkata e dozvolena");
      return 1;
    } else {
      // console.log("lozinkata ne e dozvolena");
      return 0;
    }
  }
}

function person(name, pass) {
  const nameArr = name.split("");
  const passArr = pass.split("");
  const checkedName = nameChecker(nameArr);
  const checkedPass = passChecker(passArr);
  if (passChecker(pass) === 1 && nameChecker(name) === 1) {
    console.log("Login sucessful");
  } else {
    console.log("Login Failed");
  }
}
console.log(person("lukaaaaa1", "Pass123!"));
