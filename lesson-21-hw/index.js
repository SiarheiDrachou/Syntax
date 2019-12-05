let name = ["в", "о", "р", "о", "н", "а"];
let answer = [];
let size =name.length;
alert("Отгадайте каркающую птицу");
for (let i = 0; i < name.length; i++) {
    answer[i] = "_";
    }

while(size > 0){
    let letter = prompt(`Введите букву   ${answer}`);
    if(letter.length > 1){
        alert("нужна одна буква");
        continue;
    }
    else if (letter == null || letter == "") {
        break;
    }
    else {
        for (let j = 0; j < name.length; j++) {
            if(name[j] == letter){
                answer[j] = letter;
                size--;
            }
            
        }    
    }
}
alert("congratulations");