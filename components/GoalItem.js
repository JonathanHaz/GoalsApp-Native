import { StyleSheet, Text, View, Pressable } from "react-native"

export default function GoalItem(props) {
  return (
        <View style={styles.goalItem}>
    <Pressable
     onPress={props.onDeleteItem.bind(this, props.id)}
     android_ripple={{color: '#210644'}}
     >
        <Text style={styles.goalText} >{props.text}</Text>
    </Pressable>
       </View>

  )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
      },
      goalText: {
        color: 'white',
        padding: 8,
      }
})
