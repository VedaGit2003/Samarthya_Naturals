import express, { json } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
const app=express()


//dotenv connect
dotenv.config()

//middleware
app.use(express.json())
app.use(morgan('dev'))


app.get('/',function(req,res){
    res.json({message:"Welcome"})
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));