const Dinosaur = require('../models/dinosaur.js');

const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
  }

Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
}
Park.prototype.removeDinosaur = function (dinosaur) {
    const index = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(index, 1);
}
Park.prototype.howManyGuestsAttractedPerDay = function () {
    for (let i = 0; i < this.collectionOfDinosaurs.length; i++) {
        const dinosaur = this.collectionOfDinosaurs[i];
    

    };
};
Park.prototype.allDinosaursFromASpecies = function () {
    
}
Park.prototype.numberVisitorsPerDay = function () {
    sum(this.collectionOfDinosaurs[this.dinosaur.guestsAttractedPerDay]);
}

Park.prototype.numberVisitorsPerYear = function () {
    return park.numberVisitorsPerDay() * 365;
}
Park.prototype.totalRevenuePerYear = function () {
    return park.numberVisitorsPerYear() * this.ticketPrice;
}


module.exports = Park;