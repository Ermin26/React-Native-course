import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';
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
                <TextInput style={styles.textInput} placeholder="Add a new goal"  onChangeText={goalInputHandler} value={goalText}/>
                <Button title="Add" onPress={addGoalHandler}/>
            </View>
        </Modal>
    );
}



export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8,
        marginRight: 8,
        color: 'white',
    },
    modal:{
        backgroundColor: 'red',
    },
})