// 문제 설명
// 자연수가 들어있는 배열 arr가 매개변수로 주어질 때, 배열 안의 숫자들 중 한 번씩만 나타나는(즉, 중복되어 나타나지 않는) 숫자들만 오름차순으로 정렬하여 return 하도록 solution 함수를 완성해주세요. 만약 그러한 숫자가 없다면 배열에 -1을 채워서 return 하세요.
//
//     제한사항
// arr의 길이는 1 이상 10만 이하의 자연수입니다.
//     arr의 원소는 1 이상 10만 이하의 자연수입니다.
//     입출력 예
// arr	result
//     [2, 1, 3, 3]	[1, 2]
//     [3, 4, 4, 2, 5, 2, 5, 5]	[3]
//     [3, 5, 3, 5, 7, 5, 7]	[-1]
// 입출력 예 설명
// 입출력 예 #1
//     [1, 2, 3, 3]에서 1, 2가 한번씩 나타나므로 오름차순 정렬하여 [1, 2]를 반환합니다.
//
//     입출력 예 #2
//     [3, 4, 4, 2, 5, 2, 5, 5]에서 3이 한번만 나타나므로 [3]을 반환합니다.
//
//     입출력 예 #3
//     [3, 5, 3, 5, 7, 5, 7]에서 한 번만 나타나는 숫자는 없으므로 [-1]을 반환합니다.

function solution(arr) {
    let answer = [];
    let tally = countNum(arr);
    Object.keys(tally).forEach(key => {
        if(tally[key] === 1) answer.push(Number.parseInt(key));
    });

    if (answer.length === 0) return [-1];
    return answer;
}

function countNum(arr) {
    return arr.reduce((acc, val) => {
        if (!acc[val]) acc[val] = 1;
        else acc[val] += 1;
        return acc;
    }, {})
}


console.log(test([2, 1, 3, 3]));
console.log(test([3, 4, 4, 2, 5, 2, 5, 5]));
console.log(test([3, 5, 3, 5, 7, 5, 7]));
