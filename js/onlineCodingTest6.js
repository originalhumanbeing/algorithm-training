function solution(m, n, board) {
    validate(board, m, n)

    let arr = arrayTo2Dimension(board);
    while (true) {
        let index = searchRemovableBlockIndex(arr, m, n);
        if (index.length <= 0)
            break;

        removeRemovableBlockIndex(arr, index);
        shiftDown(arr, m, n);
    }
    return countX(arr, m, n);
}

function validate(arr, m, n) {
    if ( m < 2 || m >30 || n < 2 || n > 30)
        throw "Illegal Argument Exception";
}

function arrayTo2Dimension(arr) {
    return arr.map(str => str.split(""));
}

function searchRemovableBlockIndex(arr, m, n) {
    let result = [];
    for(let i=0; i<m-1; i++) {
        for (let j=0; j<n-1; j++) {
            if (arr[i][j] != 'X'
                && arr[i][j] == arr[i][j+1]
                && arr[i][j] == arr[i+1][j]
                && arr[i][j] == arr[i+1][j+1]) {
                result.push([i,j])
            }
        }
    }
    return result;
}

function removeRemovableBlockIndex(arr, removableBlockIndex) {
    removableBlockIndex.forEach(index => {
        let i = index[0], j =index[1];
        arr[i][j] = 'X';
        arr[i][j+1] = 'X';
        arr[i+1][j] = 'X';
        arr[i+1][j+1] = 'X';

    });
}

function shiftDown(arr, m, n ) {
    for(let i=0; i<m-1; i++) {
        for (let j=0; j<n-1; j++) {
            if (arr[i][j] == 'X') {
                if (i > 0) {
                    arr[i][j] = arr[i - 1][j];
                    arr[i - 1][j] = 'X';
                }
            }
        }
    }
}

function countX(arr, m, n) {
    let count = 0;
    for(let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (arr[i][j] === 'X') {
                count++;
            }
        }
    }
    return count;
}


let arr = arrayTo2Dimension(["CCBDE", "AAADE", "AAABF", "CCBBF"]);

while (true) {
    console.log(arr);
    let index = searchRemovableBlockIndex(arr, 4, 5);
    console.log(index);
    if (index.length <= 0)
        break;

    removeRemovableBlockIndex(arr, index);
    console.log(arr);
    shiftDown(arr, 4, 5);
    console.log(arr);
}

console.log(countX(arr,4,5));

