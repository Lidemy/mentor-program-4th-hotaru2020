function join(arr, concatStr) {
    var answer = arr[0]
    for (var i = 1; i < arr.length; i++) {
        answer += concatStr + arr[i]
    }
    return answer
}


function repeat(str, times) {
    answer = ""
    for (var i = 0; i < times; i++) {
        answer += str
    }
    return answer
}
console.log(join(['a'], '!'));
console.log(repeat('a', 5));

//console.log(join([1, 2, 3], ''))
//正確回傳值：123
//console.log(join(["a", "b", "c"], "!"))
//正確回傳值：a!b!c
//console.log(join(["a", 1, "b", 2, "c", 3], ','))
//正確回傳值：a,1,b,2,c,3

//console.log(repeat('a', 5))
//正確回傳值：aaaaa
//console.log(repeat('yoyo', 2))
//正確回傳值：yoyoyoyo
