const desc = (arr) => {
    return arr.sort((n1, n2) => {
        return n2 - n1
    })
}

console.log(desc([1,4,2,3]))