const express =require('express')
require('dotenv').config();
const workoutRoutes=require('./routes/workouts')

const mongoose=require('mongoose')
const app = express()



app.use(express.json())
// // middleware
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})


// // routes
app.use('/api/workouts',workoutRoutes)
mongoose.connect(process.env.MONGO_URI).then( ()=>{
    console.log('connected to mongo')
    app.listen(process.env.PORT,() => {
        console.log('listening on port '+process.env.PORT)
    })


}).catch((error)=>{
    console.log(error)
})

