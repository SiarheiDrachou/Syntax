function fact(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function fact(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}

console.log(fact(22885));

function sum (...arr) {
    let result = 0;
    arr.forEach(function(item) {
        result += item;
    })
return result;
}

alert (sum(5, 6, 7, 8));

function getRandomArray (n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let number = Math.round(Math.random() * 10);
        arr.push(number);
    }

    return arr;
}
let numbers = getRandomArray(5);
let b= Math.min(...numbers);
console.log(numbers, b);

function sum(a) {       //sum(a)(b)
    return function(b) {
        return a + b;
    }
}
alert(sum(2)(3));

function getUserInfo(country, city) {
    alert(`${this.firstname} ${country} ${this.lastname} ${city}`)
}

let user = {
    firstname: "serg",
    lastname: "drach",
};

getUserInfo.call(user, "belarus", "minsk");
getUserInfo.apply(user, ["brus", "mik"]);