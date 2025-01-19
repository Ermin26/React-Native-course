import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

//? <ScrollView>
   //?       {/*courseGoals.map((goal)=  <Text key={goal} style={styles.goalItem}>{goal}</Text>) -> This does not apply on iOS (Iphone) */}
   //?       {courseGoals.map((goal)=>(<View key={goal} style={styles.goalItem}>
   //?         <Text style={styles.goalText}>{goal}</Text>
   //?       </View>))}
   //? </ScrollView>


//!  function addGoalHandler(){
  //!  //setGoals([...courseGoals, goalText]); // one option
  //!  setGoals(currentGoals => [
  //!    ...currentGoals,
  //!    goalText]); // Recommended
  //!};

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setGoals]= useState([]);

  function addGoalHandler(goalText){
    setGoals(currentGoals => [
      ...currentGoals,
      {text: goalText, id: Math.random().toString()}]); // Recommended
  };

  function deleteGoalHandler(id){
    setGoals(currentGoals =>{
      return currentGoals.filter(goal => goal.id!== id); // Recommended
    });
  };

  function startAddGoalHandler(){
    setModalVisible(true);
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Add new goal' color="#5e0acc" onPress={startAddGoalHandler}></Button>

        <GoalInput showModal={modalVisible} onAddGoal={addGoalHandler}/>;

      <View  style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData =>{
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;
        }}
          keyExtractor={(item, index) => {return item.id;}}
        />
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
  goalsContainer:{
    flex: 5,
    padding: 20,
    color: 'white',
  },

});