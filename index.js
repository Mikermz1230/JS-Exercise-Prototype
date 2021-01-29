/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  1
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];}
  Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
   Person.prototype.poop = function(){
    this.stomach = [];
  }
  const personOne = new Person('shrek', 31);
  const personTwo = new Person('donkey', 30);
  const personThree = new Person('pussInBoots', 34);
  
  console.log(personOne.toString());
  console.log(personTwo.toString());
  console.log(personThree.toString());
  
  personThree.eat('tacos');
  personThree.eat('pizza');
  personThree.eat('ramen');
  
  console.log(personThree.stomach);
  personThree.poop();
  
  console.log(personThree.stomach)
}

  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
  car.prototype.fill = function(gallons) {   
  this.tank = this.tank + gallons;  
  };
  const myCar = new car({
    model: "Jaguar",
    milesPerGallon: 18
  });

  console.log(myCar.tank);
  myCar.fill(20);
  console.log(myCar.tank);


  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
  person.call(this, name, age)
  this.favoriteToy = favoriteToy
  }
  
  Baby.prototype.play = function(){
    return 'playing with ${this.favoriteToy}'}
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Global scope this keyword refers to a global object containging variables and functions that can be accesssed on the global scope
    2. When followed by a . this refers to the object that is being accessed.
    3. when using a function like .call or .apply this is passed as a parameter it refers to
    4. 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}