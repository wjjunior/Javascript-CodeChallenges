const asc = (arr) => {
    return arr.sort((n1, n2) => {
        return n1 - n2
    })
}

console.log(asc([1,4,2,3]))