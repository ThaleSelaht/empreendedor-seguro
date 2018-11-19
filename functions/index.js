const functions = require('firebase-functions')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

exports.app = functions.https.onRequest(app)

// app.listen('3000', (err) => {
//   if (err) {
//     console.log(err)
//   }
// })
