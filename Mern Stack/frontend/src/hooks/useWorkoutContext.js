import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext =()=>{
    const context=useContext(WorkoutsContext)
    
    if (!context){
        throw Error('useWorkouts context muse be used inside a provide')

    }
    
    return context
}