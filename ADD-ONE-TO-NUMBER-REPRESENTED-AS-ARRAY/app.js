const adder = (arr) => {
    let arrToString = arr.join("")
    let result = parseInt(arrToString) +1
    let finalResult = result.toString().split('')
    return finalResult.map((item) => {
        return parseInt(item)
    })
}

console.log(adder([1,2,9]))