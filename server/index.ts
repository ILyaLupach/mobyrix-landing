import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import { cors } from './middleware'
import router from './routes'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors)
app.use(bodyParser.json())
app.use(express.static('static'))
app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../client/dist')))

  app.get('*', (req: Request, res: { sendFile: (arg0: string) => void } & Response) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
  })
}

mongoose.connect('mongodb+srv://admin:qw1234qw@cluster0.xdw4v.mongodb.net/testdb?retryWrites=true&w=majority')
  .then(() => console.log('Connected to DB 🔌'))
  .catch((err) => console.log("Couldn't connect to db ❌", err))

app.listen(PORT, () => {
  console.log('SERVER RUN...', PORT)
})
