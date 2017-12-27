import express from 'express'
import bodyParser from 'body-parser'
import {serverVariables} from "./settings.js"
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

const PORT = serverVariables.port || 5000

app.set('port', PORT);

app.use(express.static('./build'))

import router from "./controllers/index.js"
app.use(router)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', PORT)
})
