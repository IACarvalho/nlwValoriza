import express, { response } from 'express'

const app = express()

app.get('/tets', (request, reponse) => {
  response.send("MLW Valoriza")
})

app.post('/test', (request, response) => {
  response.json({
    "message": "NLW Valoriza!"
  })
})

app.listen(3333, () => console.log("The server is running at port 3333"))