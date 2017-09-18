function solution(n, arr1, arr2) {
    validate(n, arr1, arr2);
    return numToHash(add2DimensionArray(
        arrayToBinary(arr1, n)
        , arrayToBinary(arr2, n)
        ,n))
}

function validate(n, arr1, arr2) {
    if (n < 1 || n >16)
        throw "Illegal Arguments Exception";
    if (n != arr1.length || n != arr2.length )
        throw "Illegal Arguments Exception";

    let power = Math.pow(2, n) -1;
    for (let i=0; i<n ; i++) {
        if (arr1[i] > power || arr1[i]<0)
            throw "Illegal Arguments Exception";
        if (arr2[i] > power || arr2[i]<0)
            throw "Illegal Arguments Exception";
    }
    return true;
}

function arrayToBinary(arr1, n) {
    return arr1.map(num => num.toString(2))
        .map(num => {
            let strArr = num.split("");
            if (strArr.length < n) {
                let lackedNumber = n - strArr.length;
                for(let i=0; i<lackedNumber; i++){
                    strArr.unshift("0");
                }
            }return strArr.map(i=>parseInt(i))
        });
}

function add2DimensionArray(arr1, arr2, n) {
    let result = new Array(n);
    for(let i=0; i<n ; i++) {
        for (let j=0; j<n ; j++) {
            result[i] = result[i] || [];
            result[i][j] = arr1[i][j] || arr2[i][j] ? 1 : 0;
        }
    }
    return result;
}

function numToHash(arr) {
    return arr.map(el => el.map(bi => bi ? '#' : " ").join(''));
}

//test
console.log(arrayToBinary([9, 20, 28, 18, 11], 5));
console.log(arrayToBinary([30, 1, 21, 17, 28], 5));

//test
console.log(
    add2DimensionArray(
        arrayToBinary([9, 20, 28, 18, 11], 5)
        , arrayToBinary([30, 1, 21, 17, 28], 5)
        ,5))