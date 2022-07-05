import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container:{
        flex:0.1, 
        alignItems:"flex-end",
        borderBottomColor:'#2699fb',
        borderBottomWidth:2,
        height:30
       
      
        
    }
})

const CardHeader = (props) => {
  const {price}= props
  return (
  <View style={styles.container}>
     <Text>{price} €</Text>
  </View>
  
  )
}

export default CardHeader