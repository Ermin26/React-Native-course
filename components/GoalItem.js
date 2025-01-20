import { StyleSheet, View, Text, Pressable } from "react-native";

//! This apply only on android and on outside
    /*<Pressable android_ripple={{color:'purple'}} onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
        </View>
    </Pressable>*/
    //! This apply only on android and on inside
       /* <View style={styles.goalItem}>
            <Pressable android_ripple={{color:'#5e5aca'}} 
                        onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>*/
    //! Apply on all devices ande better (for me)
function GoalItem(props){
  
    return(
        
        <View style={styles.goalItem}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)}
                        style={({pressed})=> pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    
    )
};



export default GoalItem;



const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText:{
        color: 'white',
        padding: 8,
    },

    pressedItem:{
        opacity: 0.5,
        backgroundColor: 'red',
    }
});