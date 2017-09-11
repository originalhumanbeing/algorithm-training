/**
 numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
 s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
 예를들어 s가 "pPoooyY"면 True를 리턴하고 "Pyy"라면 False를 리턴합니다.
*/

// 1) p, y 각각 갯수 counting
// 2) 배열로 반환되는 것의 길이가 같은지 확인
// 3) 배열 길이가 같으면 true, 아니면 false

function numPY(s){
    var p = s.match(/p/g) || [];
    var y = s.match(/y/g) || [];
    if ( p.length === y.length ) {
        return true;
    } else {
        return false;
    }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )