const express = require('express');
const bodyParser = require("body-parser");
const signin = require('./signin.js');
const unit1 = require('./unit1.js');
const unit2 = require('./unit2.js');
const unit3 = require('./unit3.js');
const unit4 = require('./unit4.js');
const unit5 = require('./unit5.js');
const unit6 = require('./unit6.js');
const unit7 = require('./unit7.js');
const unit8 = require('./unit8.js');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/submit1', async (req, res) => {

  var wait = function () {
    return new Promise(function (resolve, rejsct) {
      setTimeout(() => {
        resolve('ok');
      }, 3000);
    })
  }

  const username = req.body.username;
  const password = req.body.password;
  const bookNum = req.body.bookNum;

  console.log(bookNum);

  var cookie = await signin(username, password);

  await unit1(cookie, bookNum);
  await wait;
  cookie = await signin(username, password);
  await unit2(cookie, bookNum);
  await wait;
  // cookie = await signin(username, password);
  await unit3(cookie, bookNum);
  await wait;
  // cookie = await signin(username, password);
  await unit4(cookie, bookNum);
  await wait;
  // cookie = await signin(username, password);
  await unit5(cookie, bookNum);
  await wait;
  // cookie = await signin(username, password);
  await unit6(cookie, bookNum);
  await wait;
  await unit7(cookie, bookNum);
  await wait;
  await unit8(cookie, bookNum);

  res.end('ok');
})

var server = app.listen(3000, function () {
  console.log('服务器正在监听3000端口！');
});

