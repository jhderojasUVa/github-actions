import { sayHello, sumNumbers, everythingIsFalse } from '../src'

describe('index.js', () => {
    it('Say hello says hello', () => {
        expect(sayHello()).toBe(true)
    })
    it('sum numbers, sums number', () => {
        const numsArray = [1, 2, 3]
        expect(sumNumbers(...numsArray)).toBe(6)
    })
    it('everything is false', () => {
        expect(everythingIsFalse()).toBe(false)
    })
})