const express = require('express')
const app = express()
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({"a": "Hello World","stream": "hhh"}));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

