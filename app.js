require('dotenv').config()
const express=require('express')

const app=express()
const notFound=require('./middleware/not-found')
const errorMiddleware=require('./middleware/error-handler')

//midlleware
app.use(express.json())
//routes
app.get('/',(req,res)=>{
    res.send(`<h1>Awesome Store API</h1> <a href="api/v1/products">products</a>`)
})
app.use(notFound)
app.use(errorMiddleware)
const port=process.env.PORT || 5000
const start= async()=>{
    try {
        app.listen(port,console.log(`now it is listening to port :${port}`))
    } catch (error) {
        console.log(error)
    }

}
start()