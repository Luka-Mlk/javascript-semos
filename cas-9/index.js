// OOP - object-oriented programming
// pascal-case naming style

// class name declaration
class Person {
  // class body

  // object properties (fields) - variables
  // object functions (methods) - functions

  // fields are not mandatory
  name;
  #age; // private properties are defined
  gender;
  static maxAge = 120;

  // instancira objekt od tip Person
  constructor(name, age, gender) {
    this.name = name;
    this.#age = age;
    this.gender = gender;
  }

  // getter
  get age() {
    return this.#age;
  }

  // setter
  set age(newAge) {
    if (this.#validateAge(newAge)) {
      this.#age = newAge;
    }
  }

  #validateAge(newAge) {
    if (newAge > Person.maxAge) {
      console.error("Unsupported value!");
      return false;
    }
    return true;
  }

  getGender() {
    return this.gender;
  }
}

const Object1 = { name: "Koco", age: 30, gender: "male" }; // Object

// instanciranje (kreiranje) na nov objekt od tip Person
const Person1 = new Person("Aleksandar", 20, "male");

console.log(Object1, Person1);

Person1.age = 50; // Person1.setAge(50)
console.log(Person1.age);
console.log(Person.maxAge);

// class inheritance (nasleduvanje)
class Employee extends Person {
  salary;
  position;

  constructor(name, age, gender, salary, position) {
    super(name, age, gender);
    this.salary = salary;
    this.position = position;
  }
}

const Rabotnik = new Employee("Koco", 30, "male", 1000, "programmer");
console.log(Rabotnik);
console.log(Rabotnik.age);

// Car

// da se definira klasa avtomobil (Car) koja sto ke sodrzi podatoci (fields) za model , boja, godina na proizvodstvo, maks brzina i momentalna brzina
// treba da definirame metodi za ubrzuvanje i usporuvanje na voziloto. kako parametar metodite primat brojka
// za kolku voziloto treba da se ubrza ili za kolku da se uspori. Koga ke stigneme do maksimalnata brzina, treba da ispecatime deka sme ja dostignale i treba da go sprecime voziloto da ne se ubrzuva povekje. Koga ke stigneme do nula, treba da ispecatime deka voziloto stoi i ne treba povekje da se namaluva brzinata

class Car {
  model;
  color;
  year;
  maxSpeed;
  currentSpeed;

  constructor(model, color, year, maxSpeed, currentSpeed) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;
  }

  accelerate(speed) {
    // this method speeds the vehicle up
    if (this.currentSpeed + speed >= this.maxSpeed) {
      this.currentSpeed = this.maxSpeed;
      console.log("Maximal speed reached!");
      return;
    }

    this.currentSpeed += speed;
  }

  decelerate(speed) {
    // this method slows the vehicle down
    if (this.currentSpeed - speed <= 0) {
      this.currentSpeed = 0;
      console.log("Vehicle has stopped");
      return;
    }

    this.currentSpeed -= speed;
  }
}

const Audi = new Car("Audi", "white", 2010, 200, 190);
const Toyota = new Car("Toyota", "blue", 2000, 150, 10);

console.log(Audi, Toyota);

// setInterval(() => {
//   Toyota.accelerate(20)
//   console.log(Toyota.currentSpeed)
// }, 1000)

setInterval(() => {
  Audi.decelerate(20);
  console.log(Audi.currentSpeed);
}, 1000);

// Shopping Cart

// trba da se kreiraat dve klasi -
// edna za shopping cart koja sto ke sodrzi niza od produkti i maksimalen budzet (brojka)
// edna za produkt koja sto ke sodrzi ime na produktot i negova cena

// programata treba da ovozmozi kreiranje na produkti i nivno dodavanje vo shopping cart.
// sekoj pat koga ke se dodade produkt vo shopping cart treba da se presmeta dali imame dovolno pari za da kupime se sto e dodadeno vo shopping cartot.
// isto taka treba da imame i mehanizam za brisenje na produkt od shopping cartot. produkt se brise spored negovoto ime

class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  #products;
  #budget;

  constructor(products, budget) {
    this.#products = products;
    this.#budget = budget;
  }

  addItem(newProduct) {
    const newList = [...this.#products, newProduct];
    const totalPrice = newList.reduce((sum, currentProduct) => {
      return (sum += currentProduct.price);
    }, 0);
    if (totalPrice > this.#budget) {
      console.log(
        "Budget has been reached, please remove some items in order to add more"
      );
      return;
    }
    this.#products = newList;
  }

  getItems() {
    return this.#products;
  }

  removeItem(productName) {
    this.#products = this.#products.filter(
      (product) => product.name !== productName
    );
  }
}

const Cart = new ShoppingCart([], 1000);

const Banana = new Product("Banana", 10);
const Orange = new Product("Orange", 20);
const Milk = new Product("Milk", 40);
const Bread = new Product("Bread", 20);
const Wine = new Product("Wine", 1000);

Cart.addItem(Banana);
Cart.addItem(Orange);
Cart.addItem(Milk);
Cart.addItem(Bread);

Cart.removeItem("Bread");
Cart.addItem(Wine);

console.log(Cart.getItems());
