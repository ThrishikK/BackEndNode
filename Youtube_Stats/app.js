import '../config/env.js'

import express from "express";
import vidRoutes from './routes/vidRoutes.js'



const port = process.env.PORT
console.log(port)
 
const app = express()

app.use(express.json());

app.use('/api/videos',vidRoutes)  

app.listen(port,() => {
    console.log(`Server running on port : ${port}`)
})