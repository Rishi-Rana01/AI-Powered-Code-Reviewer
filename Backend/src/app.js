import express from 'express'
import router from './routes/ai.routes.js'

const app = express()

app.get('/',(req,res)=>{
    res.send('Working...')
})

app.use(express.json())
app.use('/ai', router)

export default app;