import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("Hello World! From chota bacha Abdullah Nomani")
  res.send('Hello World! From chota bacha Abdullah Nomani ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})