"use strict";
function Car(make, color, hp) {
    this.make = make;
    this.color = color;
    this.hp = hp;

    this.showDetails = function (){
        // alert(`марка ${make}, цвет ${color}, ${hp} лс`)
    }
}

let redCar = new Car("audi", "red", 400);
// redCar.showDetails();
// console.log(window);

let cars = [{make: "audi", color:"red", hp: 50},
            {make: "porshe", color:"red", hp: 101},
            {make: "ferrary", color:"red", hp:50}];

// let targetCar = cars.find(item => item.hp < 100);
// console.log(targetCar);
// let targetIndex = cars.findIndex(item => item.hp > 100);
// console.log(targetIndex);
// let results = cars.filter(item => item.make == "audi");
// console.log(results);

let carAdd = cars.map(function(cars) {
    cars.price = 10000 * cars.hp;
    return cars;
})
// console.log(carAdd);

function sort(a, b) {
    if (a.make > b.make) return -1;
    if (a.make == b.make) return 0;
    if (a.make < b.make) return 1;
}
console.log(cars.sort(sort));
