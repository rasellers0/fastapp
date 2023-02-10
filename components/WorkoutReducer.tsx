import { exercise, exercises } from './Data/Exercise';



function WorkoutReducer(workout:exercises, action:any):exercises{
    switch(action){
        case "addNewExercise":
            //todo
            return [
                ...workout,
                {
                    id: action.id,
                    name: action.name,
                    metrics: action.metrics,
                    notes: action.notes
                }
            ]
            break;
        case "updateExercise":
            //todo
            return [...workout]
            break;
        case "deleteExercise":
            //todo
            return [...workout]
            break;
        default:
            return workout;
    }
}

export default WorkoutReducer;