const arr = [4,3,9,8,2,1]

const highest_sum = (arr) => {
    let asc_arr = arr.sort((a, b) => {
        return b - a
    })
    return asc_arr[0] + asc_arr[1]
}

const lowest_sum = (arr) => {
    let desc_arr = arr.sort((a, b) => {
        return a - b
    })
    return desc_arr[0] + desc_arr[1]
}

console.log('Highest Sum: ', highest_sum(arr))
console.log('Lowest Sum: ', lowest_sum(arr))