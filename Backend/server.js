import app from './src/app.js'
import dotenv from 'dotenv'


dotenv.config()
const Port = 3000;

app.listen(Port,()=>{
    console.log(`Server is Running on http://localhost:${Port}`)
})