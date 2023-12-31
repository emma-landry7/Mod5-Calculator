const express = require('express')
const calculatorController = require('../controllers/calculatorController')
const router = express.Router()

router.get('/add', (req, res) => {
    // res.send('Add')
    console.log(req.query)
    // let number1 = parseInt(req.query.num1)
    // let number2 = parseInt(req.query.num2)
    // let sum = number1 + number2
    // console.log(number1, '+', number2, '=', sum)
    // res.status(200).json({result: sum})
    calculatorController.addNumbers(req, res)
})

router.get('/subtract', (req, res) => {
    console.log(req.query)
    // let number1 = parseInt(req.query.num1)
    // let number2 = parseInt(req.query.num2)
    // let difference = number1 - number2
    // console.log(number1, '-', number2, '=', difference)
    // res.status(200).json({result: difference})
    calculatorController.subtractNumbers(req, res)
})

router.get('/multiply', (req, res) => {
    console.log(req.query)
    // let number1 = parseInt(req.query.num1)
    // let number2 = parseInt(req.query.num2)
    // let product = number1 * number2
    // console.log(number1, '*', number2, '=', product)
    // res.status(200).json({result: product})
    calculatorController.multiplyNumbers(req, res)
})

router.get('/divide', (req, res) => {
    console.log(req.query)
    // let number1 = parseInt(req.query.num1)
    // let number2 = parseInt(req.query.num2)
    // let quotient = number1 / number2
    // console.log(number1, '/', number2, '=', quotient)
    // res.status(200).json({result: quotient})
    calculatorController.divideNumbers(req, res)
})


module.exports = router;