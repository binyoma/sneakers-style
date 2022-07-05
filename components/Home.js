import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import PRODUITS from '../assets/data'
import Card from './Card'
import { SearchBar } from '@rneui/themed';


const Home = () => {
  return (
    <View style={{flex:1}}>
     <SearchBar 
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchInput}
        />
     <FlatList 
     data={PRODUITS}
     keyExtractor={item=>item.id}
     numColumns={2}
     renderItem={
               ({item})=><Card
                      price={item.price}
                      title={item.title}
                      desc={item.desc}
                      size={item.size}
                      likes={item.likes}
                      src={item.photo}
                   />}
     />   
      
    </View>
  )
}
const styles=StyleSheet.create({
  searchBar:{
    backgroundColor:"white",
    margin:5,
    borderColor:'#2699fb',
    borderWidth:2,
    borderTopColor:'#2699fb',
    borderBottomColor:'#2699fb',
    borderBottomWidth:2,
    borderTopWidth:2
    
  },
  searchInput:{
    backgroundColor:"white",
    borderColor:'#2699fb',
    borderWidth:2,
    borderBottomColor:'#2699fb',
    borderBottomWidth:2,
  }
})


export default Home