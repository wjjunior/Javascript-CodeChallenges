let integers = [1,2,3,4]

const sumArrItems = (arr) => {

    let sum = 0

    arr.forEach(element => {
        sum = sum + element
    });

    return sum
}

console.log(sumArrItems(integers))