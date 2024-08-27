import express from 'express'

const app = express()

// listen()
// get()

app.listen(4000, () => {
  console.log('I am running in port 4000')
})

// http://localhost:4000/api/product
// REST API
app.get('/api/product', (req, res, next) => {
  const output = { name: 'iPhone' }
  res.json(output)
})

app.get('/api/product/new', (req, res, next) => {
  const output = { name: 'new response' }
  res.json(output)
})
