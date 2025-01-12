const express=require('express')
const Workout=require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout

}=require('../controllers/workoutController')

const router=express.Router()
// GET
router.get('/',getWorkouts)
//GET id 
router.get('/:id',getWorkout)

// POST
router.post('/',createWorkout)
// DELETE
router.delete('/:id',deleteWorkout)
// UPDATE
router.patch('/:id',updateWorkout)

module.exports=router