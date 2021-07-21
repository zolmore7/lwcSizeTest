const express = require('express');
const fetch = require('node-fetch');
var theTiff = doFetch();
var question1 = {qid: 1, question: 'Heroku Question 1', type: 'textbox'};
var question2 = {qid: 2, question: 'Heroku Question 2', type: 'radio', options: [{label: 'Option 1', value: 'Opt1'}, {label: 'Option 2', value: 'Opt2'}]};
var question3 = {qid: 3, question: 'Heroku Question 3', type: 'list', options: [{label: 'DropDown 1', value: 'DD1'}, {label: 'DropDown 2', value: 'DD2'}]};
var question4 = {qid: 4, question: 'Heroku Question 4', type: 'textbox'};
var question5 = {qid: 5, question: 'Heroku Question 5', type: 'textbox'};

var jsonReturn = [];
jsonReturn.push(question1);
jsonReturn.push(question2);
jsonReturn.push(question3);
jsonReturn.push(question4);
jsonReturn.push(question5);
console.log(JSON.stringify(jsonReturn));

const app = express();
var port = process.env.PORT || 3000;
var returnVar = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstu";

for(var x = 0; x< 10000; x++) {
  returnVar += "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstu";
}
returnVar += 'DannyLeblanc12345';



app.get('/', (req, res) => {
  let dataReturn = '';
  console.log((theTiff).substring(0,100));
  //console.log('Before fetch');
  //doFetch();
  //console.log('After fetch');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  //res.end(returnVar);
  res.end(theTiff);
})

app.get('/quizData', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(jsonReturn));
})

function doFetch() {
  fetch('https://file-examples-com.github.io/uploads/2017/10/file_example_TIFF_10MB.tiff')
  .then(response => response.text())
  .then(data => {
    //theTiff = data;
    theTiff = Buffer.from(data).toString('base64');
  })
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
