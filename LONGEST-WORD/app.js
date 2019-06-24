let str = "The quick brown fox jump over the lazy dog"

const longestWord = (sen) => {
    let arr = str.split(" ")
    return arr.sort((a, b) => {
        return b.length - a.length
    })[0]
}

console.log(longestWord(str))