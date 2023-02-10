import React, { useState } from 'react';
import {metric, metrics } from './Data/metrics'
import MetricsArray from './Data/metrics'
import { View } from 'react-native';
import {Card, Button, Text, TextInput, Chip } from 'react-native-paper';



function AddExercise({ navigation }:any): React.FC { 
    return (
        <View style={{padding:20}} > 
            <Card>
                <Card.Title title="Add New Exercise" subtitle="Enter details below for new exercise." />
                <Card.Content>
                    <Text variant="labelLarge">Enter a name for your exercise:</Text>
                    <View style={{paddingBottom:25}}><TextInput mode="outlined" style={{height:25}}></TextInput></View>

                    <Text variant="labelLarge">Select up to 3 metrics to track:</Text>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}><ListMetrics></ListMetrics></View>
                    <View style={{paddingTop:25}}>
                        <TextInput mode="outlined" label="Notes" multiline={true} numberOfLines={4}> </TextInput>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => navigation.navigate('Main')}>Cancel</Button>
                    <Button>Save</Button>
                </Card.Actions>
            </Card>
        </View>
    ) as any;
}

function ListMetrics(): JSX.Element {
    const [Metrics, setMetrics] = useState(MetricsArray);

    function handleCheck(index:Number) {
        const updatedMetrics = Metrics.map((c) => {return c.id === index ? updateMetric(c) : c;});
        setMetrics(updatedMetrics);
    }

    function updateMetric(c:metric){
        c.checked = !c.checked;
        c.buttColor = c.checked ? '#3333cc' : '#9900cc';
        return c;
    }

    let metricsList =  MetricsArray.map((met) => 
        <View style={{padding:2}}>
            <Chip selected={met.checked} icon={met.checked ? 'plus' : 'minus'} onPress={() => handleCheck(met.id)}>{met.name}</Chip>
        </View>
        );
    return (metricsList) as any;
}

export default AddExercise;