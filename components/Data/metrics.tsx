import * as React from 'react';

export type metric = {
    id: number,
    name: string,
    checked?: boolean,
    buttColor?: string
}

export type metrics = metric[];


let MetricsArray:metrics = [
    {
        id: 1,
        name: 'Time',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 2,
        name: 'Miles',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 3,
        name: 'Kilometers',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 4,
        name: 'Reps',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 5,
        name: 'Sets',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 6,
        name: 'Sets of Reps',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 7,
        name: 'Sets of Time',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 8,
        name: 'Avg Speed',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 9,
        name: 'Top Speed',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 10,
        name: 'Calories',
        checked: false,
        buttColor: '#9900cc'
    },
    {
        id: 11,
        name: 'Weight',
        checked: false,
        buttColor: '#9900cc'
    }
];


export default MetricsArray;