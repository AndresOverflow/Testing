const suma = (a,b) => {
    return a-b;
}

const checks = [
    {a: 0, b:0, result: 0},
    {a: 1, b:3, result: 4},
    {a: 5, b:5, result: 10},
]

console.log(checks)

console.log("\n =======|  ASSERTS  |=================\n")

console.log("\n")


/* checks.forEach(check => {
    const {a, b, result} = check;

    console.assert(
        suma(a, b) === result,
        `Suma of ${a} and ${b} expected to be ${result}`
    )
})
*/


checks.map(check => {
    const {a, b, result} = check;

    console.assert(
        suma(a, b) === result,
        `Suma of ${a} and ${b} expected to be ${result}`
    )
})


