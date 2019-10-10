/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of "this" will be the window/console Object.
* 2. "This" refers whenever a function is called by a preceding dot notation, the object left of the dot notation gets "this".
* 3. Whenever a constrctor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
const Kenneth = new Greet('Marie'); ***this refers to "new"***
* 4. Whenever JavaScript's "call" or "apply" method is used, "this" is explicitly defined.
Kenneth.speak.call(Marie);  ***this refers method to .call***
Marie.speak.apply(Kenneth); ***this refers method to .apply***
*
* write out a code example of each explanation above
*/

// Principle 1

// Window Binding - Global Scope Binding

// if "use strict" is active it prevents us from accidentally binding to the window
// return `Hello ${this.name}`; output will be a window/global binding - Do not do!!

function sayFirstName(name) {
    console.log(this); // this console.log window
    return name;
}
console.log(sayFirstName("Kenneth"))

// Principle 2

// Implicit Binding (Automatic) with objects and methods
const hobbit = {
  name: "Gollum",
  age: 589,
  food: "raw meat",
  eat: function() {
    return `${this.name} loves to eat ${this.food}`;
  }
};

const newHobbit = {
    name: "Samwise",
    age: 102,
    food: "potatoes",
    eat: function() {
      return `${this.name} loves to eat ${this.food}`;
    }
  };

console.log(hobbit.eat());
console.log(newHobbit.eat());

// Principle 3

// code example for New Binding

  function Greet(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
      console.log(this.greeting + this.name);
      console.log(this);
    };
  }

  const Kenneth = new Greet('Marie');
  const Marie = new Greet('Kenneth');
  
  Kenneth.speak();
  Marie.speak();

// Principle 4

// Explicit Binding is for functions only // used new Bindings example function
// .apply .call

Kenneth.speak.call(Marie); 
Marie.speak.apply(Kenneth);