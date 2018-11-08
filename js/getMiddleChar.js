// 가운데 글자 가져오기

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
function solution(s) {
    let answer = '';
    let idx = Math.floor((s.length - 1) / 2);

    if (s.length % 2 === 0) {
        answer = s[idx] + s[idx + 1];
    } else {
        answer = s[idx];
    }
    return answer;
}

// 다른 사람의 풀이
// 문자열 추츨하는 substr(startIdx, length)를 활용
function solution2(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 == 0 ? 2 : 1)
}

