const express = require('express')
const app = express()
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: "Hello World" }));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

