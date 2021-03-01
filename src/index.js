export const sayHello = () => {
    console.log('Hello!')
    return true
}

export const sumNumbers = (...nums) => {
    return nums.reduce((accumulator, current) => {
        return accumulator + current
    })
}