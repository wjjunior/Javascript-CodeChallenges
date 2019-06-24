const reverse = (str) => {
    return str.split("").reduce((accum, current) => {
        return current + accum
    }, '')
}

console.log(reverse('hello'))