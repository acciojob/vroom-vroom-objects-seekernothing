// Constructor function for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car's prototype
Car.prototype.getMakeModel = function () {
  return `${this.make}, ${this.model}`; // Returns make and model
}

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Inherit properties from Car constructor
  this.topSpeed = topSpeed;    // Add topSpeed property for SportsCar
}

// Inherit the methods of Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed; // Return the top speed as a number
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
