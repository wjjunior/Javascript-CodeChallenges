const removeDup = (str) => {
    return str.replace(/([a-zA-Z0-9])(?=.*\1)/g, '')
}

console.log(removeDup('hello'))