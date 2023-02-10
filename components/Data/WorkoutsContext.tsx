import React, { createContext, useReducer } from 'react';
import { exercise, exercises } from './Exercise';
import AddExercise from '../AddExercise';
import WorkoutReducer from '../WorkoutReducer'
import { PropsWithChildren } from 'react';

const initialState:exercises = [{
    id: 0,
    name: "",
    metrics: [""],
}];

const workoutContext = createContext<{
    state: exercises;
    dispatch: React.Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null
  });

  const WorkoutContextProvider = ({ children }:any) => {
    const [state, dispatch] = useReducer(WorkoutReducer, initialState);

    return (
        <workoutContext.Provider value={{state, dispatch}}>
          {children}
        </workoutContext.Provider>
      )
    }

export {workoutContext, WorkoutContextProvider};