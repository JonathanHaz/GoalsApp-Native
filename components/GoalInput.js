import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native"

export default function GoalInput(props) {
  const [goalText, setGoalText] = useState('')

  function goalInputHandler(e){
    setGoalText(e)
  }

  function addGoalHandler(){
    props.onAddGoal(goalText)
    setGoalText('')
  }
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
    <TextInput
     style={styles.textInput}
     placeholder='Your Goals!'
     onChangeText={goalInputHandler}
     value={goalText}
     />
     <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button onPress={props.onCancel} title="Cancel" color='#f31282'/>
        </View>
        <View style={styles.button}>
        <Button  title='Add Goal' onPress={addGoalHandler} color='#5e0acc'/>
        </View>
     </View>
  </View> 
  </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },

      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',

      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
})
