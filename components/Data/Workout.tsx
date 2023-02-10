import * as React from 'react';
import {metric, metrics } from './metrics'
import { exercise, exercises } from './Exercise';

export type workout = {
    id: Number,
    exercises: exercises
    notes?: String
}

export type workouts = workout[];