import { View, Text } from 'react-native'
import React from 'react'

const CardFooter = (props) => {
    const {size}= props
  return (
    <View style={{flex:1}}>
      <Text >Taille {size}</Text>
    </View>
  )
}

export default CardFooter