// let numbers = [1,2,3];
// let numbers1 = [1,2,3];

// function areArraysSame(arr, arr1) {

//     if(arr.length !== arr1.length) {
//         return false;
//     }

//     for(let number of arr) {
//         if (!arr1.includes(number)) {
//             return false;
//         }
//     }
//     return true;
// }


// let result = areArraysSame(numbers, numbers1);
// alert(result);


// let pow = function(x, n) {
//     let result = 1;
//     for(let i=0; i<n; i++) {
//         result *= x;
//     }
//     alert(result);
// };

// // alert(pow(2, 5));

// function showError() {
//     alert("степень должна быть больше 1");
// }

// function askParams(ok, error) {
//    let x = prompt("введите число");
//    let n = prompt("введите степень");
//    if(n < 1) {
//        error();
//    }
//    else {
//        ok(x,n);
//    }
// }

// askParams(pow, showError);

let calculator = {
    a: 50,
    b: 10,
    sum() {
        return this.a + this.b;
    }
}

function mul() {
    return this.a * this.b;
}

calculator.mul = mul;
alert(calculator.mul());