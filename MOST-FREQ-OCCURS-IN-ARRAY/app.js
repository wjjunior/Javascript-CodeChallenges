const most_frequent = (arr) => {
    let chars = {}
    let max = 0
    let maxChar

    for (let ch of arr) {
        if(!chars[ch]) {
            chars[ch] = 1
        } else {
            chars[ch]++
        }
    }
    
    for(let pr in chars) {
        if(chars[pr] > max) {
            max = chars[pr]
            maxChar = pr
        }
    }

    return maxChar
}

console.log(most_frequent(['a', 'b', 'c', 'b', 'a']))