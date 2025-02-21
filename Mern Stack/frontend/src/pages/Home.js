import { useEffect,useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

import { useWorkoutsContext } from '../hooks/useWorkoutContext'
const Home = () => {

  const {workouts,dispatch}=useWorkoutsContext()

  useEffect( ()=> {

    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok){
        dispatch({
          type:'SET_WORKOUTS',payload:json
        })
      }
    }
    fetchWorkouts()
  },[] )

    return (
      <div className="home">
        <div className="workouts">

        {workouts && workouts.map((workouts) => (

         <WorkoutDetails key={workouts._id} workout={workouts}/> ))}
    

        </div>
        <WorkoutForm></WorkoutForm>
      </div>
    )
  }
  
  export default Home