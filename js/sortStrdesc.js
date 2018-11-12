// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
//
// 제한 사항
// str은 길이 1 이상인 문자열입니다.
//
// 입출력 예
// s	return
// Zbcdefg	gfedcbZ

// function solution(s) {
//     var answer = [];
//     for(let c in s) {
//         let next = Number(c)+1;
//         if(s[c] <= s[next]) {
//             answer.unshift(s[c]);
//         }
//         if(Number(c) === s.length - 1) {
//
//             for(let a in answer) {
//                 if(s[c] >= answer[a]) {
//                     answer.unshift(s[c]);
//                     break;
//                 }
//             }
//         }
//     }
//
//     console.log(answer);
//     return answer;
// }
//
// var s = 'Zbcdefg';
// solution(s);

function solution(s) {
    return s.split('').sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    }).join('');
}

var s = 'Zbcdefg';
console.log(solution(s));

// sort() -> compareFunction
// a - b > 0 -> return 1  : a가 크구나! a를 높은 idx에 배치
// a - b < 0 : a가 작구나! -> return -1 a를 낮은 idx에 배치
// a - b = 0 : -> return 0 a와 b가 같구나, 원래 위치대로 배치
// return a-b; 오름차순
// 위의 이유로 b-a; 는 내림차순. b - a > 0, b > a return -1. b가 큰가보다, b를 높은 idx에 배치...