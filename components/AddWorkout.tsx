import React, { useState } from 'react';
import { exercise, exercises } from './Data/Exercise';
import  PredefinedExercises  from './Data/Exercise';
import { StyleSheet, View } from 'react-native';
import {Card, Button, Text, TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function AddWorkout({ navigation }): React.FC {    
    return (
        <View style={{padding:20}} >
            <Card>
                <Card.Content>

                </Card.Content>
                <DateTypePicker></DateTypePicker>
                <ExercisePicker></ExercisePicker>
            </Card>
        </View>
    ) as any
}

function DateTypePicker(): JSX.Element{
    const [date, setDate] = useState(new Date());
    const [dateType, setDateType] = useState('today');
    return (
        <View>
            <Card.Actions>
                <View style={styles.aboveContainer}>
                    <View style={styles.container}>
                        <View style={styles.buttonContainer}>
                            <Button buttonColor='#9933ff' textColor='#ffffff' style={styles.buttonStyle}
                                onPress={() => {
                                    setDateType('today')
                                    setDate(new Date());
                                }}>Today
                            </Button>
                            <Button buttonColor='#9933ff' textColor='#ffffff' style={styles.buttonStyle}
                                onPress={() => {setDateType('other')}}>Another Date:</Button>
                        </View>
                    </View>
                </View>
            </Card.Actions>
            {dateType !== 'today' && <DatePicker mode="datetime" androidVariant='nativeAndroid' date={date} onDateChange={setDate}/>}
        </View>
    
    ) as any
}

function ExercisePicker() {
    const exercises = PredefinedExercises.map((ex) => ex.name)
    const [currentExercise, setCurrentExercise] = useState<exercise>();
    return (
        <View>
            <View style={{margin:5, flexDirection:'row'}}>
                <FontAwesome name='plus' size={18} color={'#444'} style={{paddingTop:7, paddingRight:5}}/>
                <SelectDropdown data={exercises} defaultButtonText='Select an exercise:'
                    onSelect={(selectedItem, index) => {
                        let ex = PredefinedExercises.find(obj => obj.name === selectedItem)
                        setCurrentExercise(ex);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}} buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition={'right'} dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle} rowTextStyle={styles.dropdown1RowTxtStyle}/> 
                
            </View>
            <MetricsInput mets={currentExercise?.metrics}></MetricsInput>
        </View>
    );
}

function MetricsInput({ mets }: { mets: String[] | undefined }) {
    return (
        <View style={{margin:5, flexDirection:'row', width:'100%'}}>
            {
                mets !== undefined && mets.map((met:String) => 
                    <View style={{margin:3, width:'30%'}}> 
                        <TextInput mode="outlined" label={met.toString()}></TextInput>
                    </View>
                )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    aboveContainer: {flex:1},
    container: {paddingLeft:20, paddingRight:20},
    buttonContainer: { flexDirection:'row'},
    buttonStyle: {width:150, borderRadius: 20,},
    dropdown1BtnStyle: { width: '80%', height: 30, backgroundColor: '#FFF', borderRadius: 8, borderWidth: 1, borderColor: '#444',},
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  });

export default AddWorkout