const express = require('express')
const app = express()
const factorial = require('./fact');


app.get('/calculate/:num', function (req, res) {
  let n=req.params.num;
  res.json({
      result:`Factoriel de ${n} est ${factorial(n)}`
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

