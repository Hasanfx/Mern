const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')


// get all workouts
const getWorkouts =async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)

}

// get a single workout
const getWorkout = async (req, res) => {
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'No workout found'})
    }

    const workout = await Workout.findById(id)
    
    if (!workout){
        return res.status(404).json({error:'no workout found'})
    }
    res.status(200).json(workout) 
}

// Create 
const createWorkout= async (req,res)=>{
    const {title,load,reps} = req.body

    try {
        const workout = await Workout.create(title,load,reps)
        res.status(201).json(workout)
    }
    catch (error){
        res.status(400).json({message:error.message})
    }
}

//Delete

const deleteWorkout= async (req,res)=>{
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'No workout found'})
    }

    const workout = await Workout.findByIdAndDelete({
        _id:id
    })
    if (!workout) {
        return res.status(404).json({ message: 'No workout found' })
    }
    res.status(200).json(workout)

}

const updateWorkout = async (req,res)=>{
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'No workout found'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{
    ...req.body
    })
    if (!workout){
        return res.status(400).json({error:'No such Workout'})
    }
    res.status(200).json(workout)

}


module.exports={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}


