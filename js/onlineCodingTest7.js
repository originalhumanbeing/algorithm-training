function solution(lines) {
    let range = mapRange(lines);
    return calculateThroughput(range);
}


function mapRange(lines) {
    return lines.map(str => {
        let arr = str.split(" ");
        let endTime = Date.parse(`${arr[0]} ${arr[1]}`);
        let time = arr[2].replace('s', '') * 1000;
        return [endTime - time, endTime];
    })
}

function getStartSecond(range) {
    return range[0][0] - new Date(range[0][0]).getMilliseconds();
}

function getEndSecond(range) {
    let length = range.length;
    return range[length-1][1] - new Date(range[length-1][1]).getMilliseconds() + 1000;
}
function calculateThroughput(range) {
    let result = [];

    range.forEach(r => {
        for (let second = r[0], end = r[1];
             second < end; second += 1000 ) {
            let list = range.filter(el => {
                let startTime = el[0];
                let endTime = el[1];

                return (startTime <= second && endTime > second)
                    || (startTime > second && startTime < second + 1000 && endTime >= second + 1000 )
            });
            result.push(list.length)
        }
    });

    return Math.max(...result);
}

let range = mapRange([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
]);
console.log(range)
;
console.log(calculateThroughput(range))

