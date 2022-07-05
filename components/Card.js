import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import LikeBtn from './LikeBtn'

const styles= StyleSheet.create({
    container:{
        borderColor:"#2699fb",
        borderWidth:2,
        flex:1, 
        margin:5,
    }
})

const Card = (props) => {
  const {price,title , src, desc,likes, size}= props
  return (
    <View style={styles.container}>
      <CardHeader price={price}/>
      <CardBody title={title} src={src} desc={desc}/>
      <View style={{flex:0.1, flexDirection:"row"}}>
        <CardFooter size={size}/>
        <LikeBtn likes={likes}/>
      </View>
    </View>
  )
}

export default Card