// let person = {
//   // properties
//   // key - value pairs
//   name: "Kocho",
//   age: 30,
//   gender: "male",
//   height: 170,
//   weight: null,
//   eat: () => {
//     console.log(`${person.name} ate an apple`);
//   },
// };

// console.log(person);

// person.gender = "female";
// delete person.gender;
// console.log(person);
// console.log(person["gender"]);

// // spread syntax // destructor
// let person2 = Object.assign({ profession: "programmer" }, person);
// let person3 = {
//   ...person,
//   profession: "accountant",
//   age: 40,
// };

// person2.age = 20;
// person2.gender = "female";
// person2.eat();

// console.log(person2);
// console.log(person3);

const kvadrat = {
  height: 20,
  width: 20,
};

function calcArea(kocka) {
  return kocka.height * kocka.width;
}

console.log(calcArea(kvadrat));

const person1 = {
  name: "Alek",
  pets: ["Cat", "Dog", "Lion"],
};
const person2 = {
  name: "Martin",
  pets: ["Hamster"],
};
people = [person1, person2];
function numPets(persons) {
  persons.forEach((person) => {
    console.log(`${person.name} has ${person.pets.length} pets`);
  });
}
numPets(people);
const students = [
  {
    id: 1,
    name: "Luka",
    year: 1,
    courses: [
      { name: "Math", grade: 6 },
      { name: "Chem", grade: 7 },
      { name: "Procedural programming", grade: 6 },
    ],
  },
  {
    id: 2,
    name: "Matej",
    year: 1,
    courses: [
      { name: "Math", grade: 9 },
      { name: "Chem", grade: 7 },
      { name: "Procedural programming", grade: 9 },
      { name: "OOP", grade: 9 },
    ],
  },
  {
    id: 3,
    name: "Nikola",
    year: 1,
    courses: [
      { name: "Math", grade: 9 },
      { name: "Chem", grade: 6 },
      { name: "Procedural programming", grade: 6 },
      { name: "OOP", grade: 7 },
    ],
  },
];
function calcAvg(allStudents) {
  let array = [];
  allStudents.forEach((student) => {
    const averageGrade =
      student.courses.reduce((sum, course) => {
        return sum + course.grade;
      }, 0) / student.courses.length;
    console.log(`${student.name} has an average grade of ${averageGrade}`);
    array = [...array, { name: student.name, averageGrade: averageGrade }];
  });
  return array;
}

const avgGrades = calcAvg(students);
// console.log(avgGrades);

function scollarshipEnabled(gradeList) {
  const filteredList = gradeList.filter((student) => {
    if (student.averageGrade > 8) return true;
    return false;
  });
  return filteredList;
}
console.log(scollarshipEnabled(avgGrades));

const myBooks = [
  {
    author: "Fyodor Dostoyevsky",
    name: "Crime and punishment",
    year: 1887,
    ISBN: 1,
    price: 500,
    read: false,
  },
  {
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
function notRead(allBooks) {
  return allBooks.reduce((currentSum, book) => {
    if (!book.read) {
      return currentSum + book.price;
    }
    return currentSum;
  }, 0);
}
console.log(notRead(myBooks));
