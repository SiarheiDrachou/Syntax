let cup = {
    color: "white",
    shape: "elips",
    isSolid: true,
    'my favourite': true,
};
// cup.color = 23;
// delete cup.isSolid;
// console.log(cup.color, cup.shape, cup.isSolid, cup["my favourite"]);

// let option = "my favourite";
// console.log(cup[option]);

// let size = prompt("введите размер кружки");
// alert(cup[size]);

// console.log(cup.option);

// if ("shape" in cup) {
//     alert(true);
// } else {
//     alert(false);
// }

// for (let key in cup) {
//     alert(key);
// }

let students = ['nina', 'serg', 'serg', 'andr', 'nik', 'aleks'];
students[3] = 'serg';
students[6] = 'aleksandra';
alert(students.length);
students.splice(2,2,"syntax","syntax");

for (let i=0; i< students.length; i++) {
    console.log(i + " : " + students[i]);
}







