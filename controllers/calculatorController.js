const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let sum = number1 + number2
    console.log(number1, number2, sum)
    // res.status(200) // 200 = OK, 201 = CREATED/UPTDATED, 404 = NOT FOUND
    // res.json({result: sum})
    res.status(200).json({result: sum})
}

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let difference = number1 - number2
    console.log(number1, '-', number2, '=', difference)
    res.status(200).json({result: difference})
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let product = number1 * number2
    console.log(number1, '*', number2, '=', product)
    res.status(200).json({result: product})
}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let quotient = number1 / number2
    console.log(number1, '/', number2, '=', quotient)
    res.status(200).json({result: quotient})
}

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}