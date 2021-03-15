const palindrome = (string) => {
    return string
        .split('') // convert the string to array
        .reverse() // do the reverse of the array
        .join('') //  convert the array into a string
}


const average = array => {
    let sum = 0;
    array.forEach(num => {sum += num})
    return sum /array.length
        
        
}

module.exports = {
    palindrome,
    average
}

// import JEST as:
// npm install jest --save-dev / npm install jest -D