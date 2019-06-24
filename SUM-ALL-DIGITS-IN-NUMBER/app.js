const adder = (num) => {
    let sum = 0
    let arr = num.toString().split('')
    arr.forEach(element => {
        sum += parseInt(element)
    });
    return sum
}

console.log(adder(12345))