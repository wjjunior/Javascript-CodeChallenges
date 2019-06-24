const intReverse = (param) => {
    let reversed = param.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(param)
}

console.log(intReverse(-123))