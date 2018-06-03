function calc_time(section_no) {
    var duration_time = getDurationTime(section_no);
    return sumArr(arrTointArr(duration_time));
}

// 시간 계산을 하고 싶은 section num 받음
function getDurationTime(section_no) {
    return document.querySelectorAll("#collapsible-content-" + section_no + " " + ".lecture__item__link__time");
}

// 위에서 받아온 str 배열을 int 배열로 변환
function arrTointArr(duration_time) {
    var arr_d = [];
    // 필요한 시간 텍스트만 가져옴
    for (var i = 0; i < duration_time.length; i++) {
        var duration_time_text = duration_time[i].innerText;
        arr_d.push(duration_time_text);
    }

    // 시간 텍스트를 ":"로 나눠서 새 배열을 만듦
    var new_arr = [];
    for (var i = 0; i < arr_d.length; i++) {
        var split_el = arr_d[i].split(":");
        new_arr.push(split_el);
    }

    var new_row = [];
    // str을 int로 변환
    for (var i = 0; i < new_arr.length; i++) {
        var row = new_arr[i];
        var min_int = parseInt(row[0]);
        var sec_int = parseInt(row[1]);
        new_row.push([min_int, sec_int]);
    }

    return new_row;
}

function sumArr(arr) {
    var sum_min = 0;
    var sum_sec = 0;

    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        var min = row[0];
        var sec = row[1];
        sum_min += min;
        sum_sec += sec;
    }

    var quotient = sum_sec / 60;
    sum_sec = sum_sec % 60;

    sum_min = sum_min + parseInt(quotient);

    return [sum_min, sum_sec]
}