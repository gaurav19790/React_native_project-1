import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
const Exercises=[{name:"push-Up"},{name:"pull-Up"},{name:"Flat Bench Press"},
{name:"incline Dumbell Press"},{name:"Decline Press"},{name:"Incline bench Dumbell Fly"},
{name:"Chest Dips"},{name:"Dumbell PullOver"}];
const Exercise = ({ navigation}) => {
  return (
    <View>
      <FlatList data={Exercises} renderItem={({ item:{name}})=>{
        return (
          <TouchableOpacity  style={{
        flexDirection: "row", alignItems: "center",
        padding: 10, borderRadius: 10,
        backgroundColor: "#edebe6",height:50,margin:10,justifyContent: "space-between"
      }} 
      onPress={()=>navigation.navigate("Demo")}
      >
        <Text>{name}</Text>
        <Text style={{backgroundColor:"black",color:"white",padding:5,borderRadius: 10}} >Demo</Text>

          </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

export default Exercise