const Logger = require("./logger")

let myLogger = new Logger()

class Calculator {
    constructor() {
        // this.id = Math.floor(Math.random() * 10000000000)
    }
    // #log = (value) => {
    //     console.log(`[Calculator: ${this.id}]: ${value}`)
    // }

    add(num1, num2) {
        const value = num1 + num2
        myLogger.log(value)
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2
        myLogger.log(value)
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2
        // this.#log(value)
        myLogger.log(value)
        return value;
    }

    divide(num1, num2) {
        const value = num1 / num2
        // this.#log(value)
        myLogger.log(value)
        return value;
    }
}

module.exports = Calculator