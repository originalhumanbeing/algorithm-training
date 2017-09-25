function solution(dartResult) {
    let dartResultArr = splitDartResult(dartResult);
    return calculateSpecialScore(dartResultArr);
}

const SCORES = ['S', 'D', 'T'];
const SPECIAL = ['*', '#'];


function calculateSpecialScore(scoreArray) {
    let stack = [];
    scoreArray.forEach((el)=> {
        if (el == '*') {
            let num1 = stack.pop();
            let num2 = stack.pop();
            if (num1) stack.push(num1 * 2)
            if (num2) stack.push(num2 * 2)

        } else if (el == '#') {
            let num = stack.pop();
            if (num) stack.push(num * -1)
        } else {
            stack.push(el);
        }
    });
    return stack.reduce((sum, el) => sum + el, 0);
}

function splitDartResult(dartResult) {
    let prevIndex = 0;
    return dartResult.split("").map((el, i, arr) => {
        if(SCORES.includes(el)) {
            let num = arr.slice(prevIndex, i).join('');
            if (num < 0 || num > 10 ) throw "Illegal Arguments Exception!";
            prevIndex = i+1;
            return calculateLetterScore(num, el);
        }
        else if (SPECIAL.includes(el)) {
            prevIndex = i+1;
            return el;
        }
    }).filter(i => i);
}

function calculateLetterScore(num, scoreLetter) {
    switch (scoreLetter) {
        case "S":
            return parseInt(num);
        case "D":
            return Math.pow(num, 2);
        case "T":
            return Math.pow(num, 3);
        default:
            throw "Illegal arguments Exception"

    }
}


let scoreArray = splitDartResult("1S*2T*3S");
console.log(scoreArray);
console.log(calculateSpecialScore(scoreArray));