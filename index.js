const express = require('express')
const internalIp = require('internal-ip');

//
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/post', (req, res) => {
    res.send(req.body);
  })

app.listen(port, () => {
  console.log(`listening at http://${internalIp.v4.sync()}:${port}`)
})