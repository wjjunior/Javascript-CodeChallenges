const bouncer = (arr) => {
    let result = []
    for(let item of arr) {
        if(item) result.push(item)
    }
    return result
}

console.log(bouncer([1, 2, 3, '', 0, false, null, undefined]))