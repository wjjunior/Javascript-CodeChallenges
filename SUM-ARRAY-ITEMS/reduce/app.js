let integers = [1,2,3,4]

const sumArrItems = (arr) => {

    return arr.reduce((sum, current) => {
        return sum + current
    }, 0)
}

console.log(sumArrItems(integers))