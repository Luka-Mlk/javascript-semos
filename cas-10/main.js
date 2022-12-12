const students = [
  { id: 1, name: "koco" },
  { id: 2, name: "aleksandar" },
  { id: 3, name: "filip" },
];
const teachers = [
  { id: 4, name: "marija" },
  { id: 5, name: "vlatko" },
  { id: 3, name: "filip" },
];
function createArray(object) {
  const newArray = [];
  object.forEach((person) => {
    newArray.push(person.id);
  });
  return newArray;
}

const studentsArr = createArray(students);
const teachersArr = createArray(teachers);
console.log(studentsArr, teachersArr);
