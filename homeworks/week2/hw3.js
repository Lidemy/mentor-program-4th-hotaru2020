function reverse(str) {
    var answer = ""
    for (var i = str.length - 1; i >= 0; i--) {
        answer += str[i]
    }
    console.log(answer)   
}

reverse('hello');

//test
//reverse('yoyoyo')
//正確輸出：oyoyoy

//reverse('1abc2')
//正確輸出：2cba1

//reverse('1,2,3,2,1')
//正確輸出：1,2,3,2,1