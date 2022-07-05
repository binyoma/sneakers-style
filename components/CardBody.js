import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const CardBody = (props) => {
  const {title , src, desc }= props
  const styles=StyleSheet.create({
    container:{
      flex:1,
      borderBottomColor:'#2699fb',
        borderBottomWidth:2
    },
    title:{
      textTransform:"uppercase",
      marginBottom:10
    }
  })
  return (
    <View style={styles.container}>
        <Image source={src} style={{width:"100%", height:100}}/>
        <Text style={styles.title}>{title}</Text>
        <Text>{desc}</Text>
    </View>
  
    
  )
}

export default CardBody