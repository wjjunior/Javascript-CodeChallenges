const sumInRange = (range) => {
    let sum = 0
    let arr = range.split('-')
    for(let i = arr[0]; i<= arr[1]; i++) {
        sum += parseInt(i)
    }
    return sum
}

console.log(sumInRange('1-4'))