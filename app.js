require('dotenv').config()
require('express-async-errors')
const express=require('express')

const app=express()
const notFound=require('./middleware/not-found')
const errorMiddleware=require('./middleware/error-handler')
const connectDB=require('./db/connect')
const productRouter=require('./routes/products')
//midlleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send(`<h1>Awesome Store API</h1> <a href="api/v1/products">products</a>`)
})
app.use('/api/v1/products',productRouter)
app.use(notFound)
app.use(errorMiddleware)
const port=process.env.PORT || 5000
const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`now it is listening to port :${port}`))
    } catch (error) {
        console.log(error)
    }

}
start()