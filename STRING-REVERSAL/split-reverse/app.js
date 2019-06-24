const reverse = (str) => {
    let reversedStr = str.split("").reverse().join('')
    return reversedStr
}

console.log(reverse('hi'))