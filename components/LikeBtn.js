import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from '@rneui/themed'



const styles= StyleSheet.create({
    icon:{
        padding:0,
        margin:0
    
    }
})

const LikeBtn = (props) => {
    
    const [likes ,setLikes]= useState(props.likes)
    const [heart, setHeart]=useState('heart-outline')
    const handleLikes=()=>{
        
      if( heart==='heart-outline'){
            setLikes(parseInt(likes)+1);
            setHeart('heart');
        }else{
            setLikes(parseInt(likes)-1);
            setHeart('heart-outline');
        } 
    }
  return (
    <View style={{flex:1, flexDirection:"row", alignSelf:"flex-end", justifyContent:"flex-end"}}>
      <Text >{likes}</Text>
      <Icon 
      name={heart}  
      type='ionicon'
      color='#2699fb'
      containerStyle={styles.icon}
      onPress={handleLikes}
      />
    </View>
  )
} 

export default LikeBtn