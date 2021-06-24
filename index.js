const express = require('express')
const app = express()
const port = 5123

app.get('/', (req, res) => {
  res.send({"data" : "Hello World!"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

