import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';

//? <ScrollView>
   //?       {/*courseGoals.map((goal)=  <Text key={goal} style={styles.goalItem}>{goal}</Text>) -> This does not apply on iOS (Iphone) */}
   //?       {courseGoals.map((goal)=>(<View key={goal} style={styles.goalItem}>
   //?         <Text style={styles.goalText}>{goal}</Text>
   //?       </View>))}
   //? </ScrollView>


export default function App() {

  const [goalText, setGoal] = useState('');
  const [courseGoals, setGoals]= useState([]);

  function goalInputHandler(enteredText){
    setGoal(enteredText);
  };

  function addGoalHandler(){
    //setGoals([...courseGoals, goalText]); // one option
    setGoals(currentGoals => [
      ...currentGoals,
      goalText]); // Recommended
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View  style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData =>{
          console.log(itemData.item);
          return <GoalItem text={itemData.item}/>;
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'gray',
  },
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
  goalsContainer:{
    flex: 5,
    padding: 20,
    color: 'white',
  },
  

});
