function capitalize(str) {
    var answer = ""
    if (str[0] >= "a" && str[0] <= "z") {
        answer += str[0].toUpperCase()
    } else answer += str[0]

    for (var i = 1; i < str.length; i++) {
        answer += str[i]
    }
    return answer  
}

console.log(capitalize('hello'));

//test
//console.log(capitalize('nick'))
//正確回傳值：Nick

//console.log(capitalize('Nick'))
//正確回傳值：Nick

//console.log(capitalize(',hello'))
//正確回傳值：,hello