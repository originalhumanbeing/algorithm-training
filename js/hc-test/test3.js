/*
문제 설명
자연수가 적힌 2 * N장의 카드묶음을 가지고 있습니다. 카드묶음에는 같은 숫자가 적힌 카드가 2장씩 포함되어 있습니다. 어느 날 카드 1장을 잃어버렸습니다. 2*N - 1 길이의 카드 배열(cards)이 입력으로 주어질 때 잃어버린 카드에 적힌 숫자를 return 하도록 solution 함수를 완성해 주세요.

    제한사항
카드 개수 N : 1,000,000 이하의 자연수(단, 홀수로 주어집니다.)
카드에 적혀 있는 숫자 범위 : 100,000,000 이하의 자연수
입출력 예
cards	answer
    [1, 3, 2, 2, 5, 5, 1]	3
입출력 예 설명
입출력 예 #1
1은 2개, 2는 2개, 5는 2개, 3은 1개가 들어있으므로 없어진 카드는 3이 적힌 카드입니다.*/

function solution(cards) {
    let answer = 0;
    let tally = countNum(cards);
    Object.keys(tally).forEach(key => {
        if(tally[key] === 1) answer = Number.parseInt(key);
    });
    return answer;
}

function countNum(cards) {
    return cards.reduce((acc, val) => {
        if (!acc[val]) acc[val] = 1;
        else acc[val] += 1;
        return acc;
    }, {})
}

console.log(solution([1, 3, 2, 2, 5, 5, 1]));