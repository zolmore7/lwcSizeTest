const express = require('express')
const app = express()
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({"data" : "Hello World!"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

