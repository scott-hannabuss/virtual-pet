const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGER_ONSET = 5;
const UNFIT = 3;

// constructor function to intiliase pet instance
function Pet(name) {
  this.name = name;
  this.children = [];
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype = {
  get isAlive() {
    return this.age <= 30 && this.hunger <= 10 && this.fitness > 0;
  },
};

Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};
Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else if (this.hunger - 3 >= MINIMUM_HUNGER) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    return "Your pet is no longer alive :(";
  } else if (this.fitness <= UNFIT && this.hunger >= HUNGER_ONSET) {
    return "I am hungry AND I need a walk";
  } else if (this.fitness <= UNFIT) {
    return "I need a walk";
  } else if (this.hunger >= HUNGER_ONSET) {
    return "I am hungry";
  } else {
    return "I feel great!";
  }
};

Pet.prototype.haveBaby = function (Child) {
  this.children = Child;
};

module.exports = Pet;
