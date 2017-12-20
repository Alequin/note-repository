var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const PORT = 5000

app.set('port', PORT);

app.use(express.static('./build'));

app.use(require("./controllers/index.js"))

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', PORT)
})
