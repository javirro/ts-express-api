import express from 'express'
const app = express()
import diaryRouter from './routes/diaries'

app.use(express.json())

const PORT: number = 5000

app.use('/api/diaries', diaryRouter)

app.get('/ping', (_req, _res) => {
    console.log("Ping received")
})

app.listen(PORT, () => {
    console.log("Server running in port" + PORT)
})