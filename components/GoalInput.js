
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
import { useState } from'react';



function GoalInput(props) {
    const [goalText, setGoal] = useState('');
    function goalInputHandler(enteredText){
        setGoal(enteredText);
    };

    function addGoalHandler(){
        props.onAddGoal(goalText);
        setGoal(''); // clear the input field after adding a goal
    }


    return (
        <Modal visible={props.showModal} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput style={styles.textInput} placeholder="Add a new goal"  onChangeText={goalInputHandler} value={goalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} color="#5e0acc"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.cancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}



export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor: '#311b6b',
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        margin: 8,
        color: '#120438',
    },

    buttonContainer:{
        flexDirection: 'row',
        marginTop: 10,
    },
    button:{
        width: 100,
        margin: 8,
    },

    image:{
        width:100,
        height:100,
        margin: 20,
    },
})
