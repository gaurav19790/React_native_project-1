import { View, Text, ScrollView, TouchableOpacity, Button, FlatList } from 'react-native'
import React from 'react'

const Day = ({ navigation, day }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Exercise",{day})}
      style={{
        flexDirection: "row", alignItems: "center",
        padding: 10, borderRadius: 10,
        backgroundColor: "#edebe6",height:100,margin:10
      }}>
      {/* <Image resizeMode="cover" style={{width: 50,height: 50,borderRadius: 10}} source={{ url: "https://www.muscleandfitness.com/wp-content/uploads/2017/07/1109-ryan-terry-weighted-crunch-abs.jpg?quality=86&strip=all"}}/> */}
      <View style={{width: 150 ,paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign:"center" }}>
          {day}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const Days = ({ navigation }) => {
  const DaysList = [{ id: 1, day: "Chest" },
  { id: 2, day: "Shoulder" },
  { id: 3, day: "Back" },
  { id: 4, day: "Bicep" },
  { id: 5, day: "Tricep" },
  { id: 6, day: "Legs" },
  { id: 7, day: "Six Pack" },];


  return (
    <View >
      {/* <Button title="days" onPress={()=> navigation.navigate("Exercise")}/> */}

      <FlatList data={DaysList} renderItem={({ item: { day, id } }) => {
        return (
          <Day day={day} navigation={navigation} />
        )
      }}
      numColumns={2}
      />
    </View>
  )
}

export default Days