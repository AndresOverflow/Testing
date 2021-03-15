const {average} = require('../utils/for_testing')

describe('average', () =>{
    test('of one value is the value itselft', () => {
        expect(average([1])).toBe(2)
    })

    test('of one value is the value itselft', () => {
        expect(average([3,3,3])).toBe(3)
    })
})