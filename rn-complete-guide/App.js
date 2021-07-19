import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,View,Button,Alert, FlatList,Pressable,Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import AlertWithmodal from './components/AlertWithmodal'
var goalId1;

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(courseGoals);

  //this a way to define function in js
  /*function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
    }*/
  //we can also write functions like this
  const addGoalHandler = goalTitle => {
    //[...courseGoals] creating a new array with the value of courseGoals array
    //[..courseGoals,enteredGoal] enteredGoal is a single new value that is being added to that new array as 
    //an element
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);

    };

    const removeGoalHandler = goalId => {
      /*Alert.alert(   'Delete Item',  'Press Ok to Delete!',  
            [  
                {  text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', 
                 onPress: () =>  setCourseGoals( currentGoals => {return currentGoals.filter((goal) => goal.id !== goalId)} ) 
            },  
            ]   );*/
        goalId1 = goalId;
        console.log(goalId);
        setModalVisible(!modalVisible);

     
    };
    
    const deleteItem = goalId =>{
      setModalVisible(false);
      setCourseGoals( currentGoals => {return currentGoals.filter((goal) => goal.id !== goalId)} );
    };
    console.log(goalId1);


    const changeModalFlag = () => setIsAddMode(true);

    const cancelModal = () => setIsAddMode(false);


  return (
    //parent view
    //here the curly braces inside style is javascript object
    //the style is just accessing the property of styles js object of StyleSheet
    <View style={styles.screen}>

     <Pressable 
     style = {styles.button}
     onPress = {changeModalFlag}
     >
     <Text style = {styles.textStyle}>Add New Goal</Text>

     </Pressable>

        <GoalInput modalFlag = {isAddMode} cancelAdding = {cancelModal} onAddGoal = {addGoalHandler}/>
      <FlatList
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem = { itemData => <GoalItem popupModalState = {modalVisible} delFun = {deleteItem} id ={itemData.item.id} onDelete ={removeGoalHandler} title = {itemData.item.value} /> }
      />

      <AlertWithmodal forBackButton = {removeGoalHandler} popupModalFlag = {modalVisible} GoalId = {goalId1} delFun = {deleteItem} />
       
      

    </View>
  );
}

/*StyleSheet.create takes js objects. we can use any property of that object to the style property of the veiw*/
const styles = StyleSheet.create({
  //this is a property of js object
  screen: {
    padding: 50,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#2980b9",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
  
});
