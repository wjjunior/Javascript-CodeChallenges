let str = "The quick brown fox jump over the lazy dog"

const wordCounter = (str) => {
    let arr = str.split(" ")
    return arr.length
}

console.log(wordCounter(str))