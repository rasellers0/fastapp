import React from 'react';
import type {PropsWithChildren} from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';


type SectionProps = PropsWithChildren<{title: string;}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const headerStyle = {};
  return (
    <View style={styles.sectionContainer}>
        <View style={{backgroundColor: '#3399ff'}} >
            <Text style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>{title}</Text>
        </View>
      
      <Text style={[styles.sectionDescription, {color: isDarkMode ? Colors.light : Colors.dark}]}>{children}</Text>
    </View>
  );
}

function Main({ navigation }): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter};
    return (
        <SafeAreaView style={backgroundStyle}> 
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white,}}>
                    <Section title="FAST App">
                        Fitness And Strength Tracker App -- start tracking your exercises today!
                    </Section>
                    <View style={styles.container}>
                        <View style={styles.roundedButtons}>
                            <Button title="Add a new Exercise!" onPress={() => navigation.navigate('Add Exercise')} />
                        </View>
                        <View style={{padding:25}}>
                            <View style={styles.roundedButtons}>
                                <Button title="Start a new workout!" onPress={() => navigation.navigate('Add Workout')} />
                            </View>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {marginTop: 32, paddingHorizontal: 24},
    sectionTitle: {fontSize: 24, fontWeight: '600'},
    sectionDescription: {marginTop: 8, fontSize: 18, fontWeight: '400'},
    highlight: {fontWeight: '700'},
    roundedButtons: {borderRadius: 20, overflow: 'hidden', 
    textAlign: 'center', flexDirection:'row', alignItems:'center', justifyContent:'center'},
    container: {flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20},
  });
  
export default Main;