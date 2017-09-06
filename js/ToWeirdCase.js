/** toWeirdCase 함수는 문자열 s를 매개변수로 입력받습니다.
    문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하세요.
    예를 들어 s가 "try hello world"라면 첫 번째 단어는 "TrY", 두 번째 단어는 "HeLlO", 세 번째 단어는 "WoRlD"로 바꿔 "TrY HeLlO WoRlD"를 리턴하면 됩니다.
    주의 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단합니다. */

function toWeirdCase(s) {
    //1. 단어를 분리하기 split(공백) -> try, hello, world
    //2. 각 단어의 문자를 홀수면 소문자, 짝수면 대문자로 변환 (배열.map)
    //	2-1. 각 문자를 분리하고(split) map을 이용해서 대소문자를 변환한 후 join
    //3. 각 단어들을 join(공백)
    // console.log(s);
    return s.split(" ").map(word =>
        word.split("").map((ch, i) => i % 2 == 0 ? ch.toUpperCase() : ch.toLowerCase()).join("")
    ).join(" ");

    /* var result = ""
     // var index = s.charAt(i);
     console.log('처음 i', index)
     for (var i = 0; i < s.length; i++) {
     var index = s.charAt(i);
     if ( i % 2 == 0 ) {
     console.log('2번 i', index)
     result += index.Uppercase;
     } else {
     console.log('3번 i', index)
     result += index;
     }
     }
     return result;
     */
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));
