import * as React from 'react';
import {metric, metrics } from './metrics'

export type exercise = {
    id: Number,
    name: String,
    metrics: String[],
    notes?: String
}

export type exercises = exercise[];

let PredefinedExercises: exercises = [
    {
        id:1,
        name: 'Treadmill',
        metrics: ["Time", "Miles", "Calories"],
        notes: ''
    },
    {
        id:2,
        name: 'Planks',
        metrics: ['Sets of Time', 'Weight'],
        notes: ''
    },
    {
        id:3,
        name: 'Sit-Ups',
        metrics: ['Sets', 'Reps', 'Weight'],
        notes: ''
    },
    {
        id: 4,
        name: 'Split Lunges',
        metrics: ['Sets', 'Reps', 'Weight'],
        notes: ''
    },
    {
        id: 5,
        name: 'Barbell Squat',
        metrics: ['Sets', 'Reps', 'Weight'],
        notes: ''
    }
];

export default PredefinedExercises;
