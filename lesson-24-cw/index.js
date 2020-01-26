// let vehicle = {
//     showProps() {
//         alert(`${this.type} with ${this.engines} engines and ${this.wheels} wheels`);
//     }
// };

// let car = Object.create(vehicle);

// car.type = "car";
// car.engines = 1;
// car.wheels = 4;

let hybridCar = {
    engines:2,
    subtype: "hybrid",
    showProps() {
        alert(`${this.type} ${this.subtype} with ${this.engines} engines and ${this.wheels} wheels`);
    }
};
let a = hybridCar.showProps.bind(hybridCar);
setTimeout(a, 2000);

// Object.setPrototypeOf(hybridCar, car);

// function showServerError() {
//     alert("Server error");
//     clearTimeout(responseTimerId);
// }

// function getServerResponse() {
//     alert("Get response");
//     clearTimeout(errorTimerId);
// }

// let errorTimerId = setTimeout(showServerError, 8000);
// let responseTimerId = setTimeout(getServerResponse, 2000);

// function sayHi() {
//     console.log("hello");
// }

// let timerId = setInterval(sayHi, 10);
// setTimeout(() => clearInterval(timerId), 5000)


// function Vehicle(type, engines, wheels) {
//     this.type = type;
//     this.engines = engines;
//     this.wheels = wheels;
// }

// // Vehicle.prototype = vehicle;

// let hybridCar = new Vehicle("car", 2, 4)

// let car = new Vehicle ("car", 1, 4);


// // car.__proto__ = vehicle;

// // hybridCar.__proto__ = car;

// // hybridCar.showProps();
// // car.showProps();

// // for(let key in hybridCar) alert(key);
// console.log(Object.keys(hybridCar));


