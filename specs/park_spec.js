const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe("Park", function() {
  
  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 15);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });
  
  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
      park.addDinosaur("Heffy");
      assert.deepStrictEqual(park.collectionOfDinosaurs, ["Heffy"])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur("Heffy");
    park.addDinosaur("Yuri");
    park.removeDinosaur("Yuri");
    assert.deepStrictEqual(park.collectionOfDinosaurs, ["Heffy"])
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.howManyGuestsAttractedPerDay();
    assert.deepStrictEqual(actual, 0);
  });

  xit('should be able to find all dinosaurs of a particular species', function () {
    
  });

  xit('should be able to calculate the total number of visitors per day', function () {
    const actual = park.numberVisitorsPerDay();
    assert.deepStrictEqual(actual, 50);
  });

  xit('should be able to calculate the total number of visitors per year', function () {
    const actual = park.numberVisitorsPerYear();
    assert.deepStrictEqual(actual, 18250);
  });

  xit('should be able to calculate total revenue for one year');
    const actual = park.numberVisitorsPerYear();
    assert.deepStrictEqual(actual, 273750);
});
