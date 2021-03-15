//Jest looks for all .test.js files
// https://jestjs.io/es-ES/docs/expect

const { test, expect } = require('@jest/globals')
const { palindrome } = require('../utils/for_testing')

test('palindrome of andres', () => {
    const result = palindrome('andres')

    expect(result).toBe('serdna')

})

test('palindrome of empty string', () => {
    const result = palindrome('')

    expect(result).toBe('')
})
