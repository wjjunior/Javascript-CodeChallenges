const separate = (param) => {
    let result = param.join('')
    return result.match(/\d+/g).join('')
}

console.log(separate(['h', 2, 'e', 'l', 1, 'o', 3, 4]))