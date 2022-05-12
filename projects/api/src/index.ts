import express, { Request, Response, NextFunction } from 'express'

const app = express()
const port = 4000

const status = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json({ status: 'ok' })
}

app.get('/status', status)

app.listen(port, () => {
  console.log(`API is running on port ${port}.`)
})
