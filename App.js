import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [courseGoal, setCourseGoal] = useState([])

  function startAddGoalHandler(){
    setModalVisible(true)
  }

  function endAddGoalHandler(){
    setModalVisible(false)
  }

  function addGoalHandler(goalText){
    setCourseGoal(currentCourseGoal => [
      ...currentCourseGoal,
      { text: goalText, id: Math.random().toString() }
    ]);
    setModalVisible(false)
  } 

  function deleteGoalHandler(id) {
    setCourseGoal((currentCourseGoal)=>{
      return currentCourseGoal.filter((goal)=> goal.id !== id)
    })
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={startAddGoalHandler} color='#a065ec'/>
      <GoalInput onCancel={endAddGoalHandler} visible={modalVisible} onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData, index) => {
            return <GoalItem
             text={itemData.item.text}
             id={itemData.item.id}
             onDeleteItem={deleteGoalHandler}/>
          }} 
          keyExtractor={(item, index)=>{
            return item.id
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    padding: 50,
  },
  goalsContainer: {
    flex: 4
  },
});
