function solution(str1, str2) {
    let set1 = split2CharSet(str1), set2 = split2CharSet(str2);
    if (set1.length == 0 && set2.length == 0)
        return 65536;
    return calculateIntersectionCount(set1, set2) / calculateUnionCount(set1, set2) * 65536;
}

function split2CharSet(str) {
    let result = [];
    for(let i =0 ;i < str.length-1 ; i++) {
        if(!str[i].match(/[A-Za-z]/) || !str[i+1].match(/[A-Za-z]/) )
            continue;
        result.push((str[i] + str[i+1]).toUpperCase());
    }
    return result;
}

function calculateUnionCount(set1, set2) {
    let result = [...set1];
    set2.forEach(el => {
        if (!result.includes(el)) result.push(el);
    });
    return result.length;
}

function calculateIntersectionCount(set1, set2) {
    let result = [];
    set2.forEach(el => {
        if (set1.includes(el)) result.push(el);
    });
    return result.length;
}

console.log(split2CharSet("aa1+aa2"))
console.log(solution("FRENCH","france"));
console.log(solution("aa1+aa2","AAAA12"));

