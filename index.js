const express = require('express')
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')
const app = express()
const port = 3000

app.use(express.json())
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

const calculatorRoutes = require('./routes/calculatorRoutes')

app.use('/', express.static('public'))
app.use('/calculator', calculatorRoutes)

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})