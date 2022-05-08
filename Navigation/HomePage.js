import { View, Text, ScrollView, TouchableOpacity, Button, Image ,FlatList} from 'react-native'
import React,{useLayoutEffect} from 'react'


const HomeList = ({ navigation,url,title,color}) => {
 
  return (
    <TouchableOpacity
      style={{
        height: 250,
        width: "100%",
        marginTop: 10,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: "black"
      }}
      onPress={() => navigation.navigate("Days",{title,color})}
    >
      <Image
        source={{uri:url}}
        resizeMode="cover"
        style={{ width: "100%", height: 250, borderRadius: 10 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 15,
          paddingHorizontal: 5,
          paddingVertical: 5,
          // backgroundColor: "#e5eeee80",
          backgroundColor: color,
          borderRadius: 10,
          borderTopEndRadius: 0,
          borderBottomStartRadius: 0

        }}
      >
        <Text style={{ color: "white", fontSize: 20,padding:4 }}> {title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const MoreDetail=()=>{
  return (
      <TouchableOpacity
      onPress={()=>{}}
      >
          <Text style={{flex: 1,flexDirection: "row",color:"black", padding: 5,fontSize: 24,alignItems:"center",}}>☰</Text>
      </TouchableOpacity>
  )
}

const HomePage = ({ navigation }) => {
  const Data = [{ id:1,url: "https://www.muscleandfitness.com/wp-content/uploads/2018/12/main-incline-fly-1109.jpg?w=1109&h=614&crop=1&quality=86&strip=all", title: "BULKY BODY",color:"#FC3158" },
  { id:2,url: "https://www.muscleandfitness.com/wp-content/uploads/2018/12/main-incline-fly-1109.jpg?w=1109&h=614&crop=1&quality=86&strip=all", title: "LEAN BODY",color:"#5FC9F8" },
  { id:3,url: "https://www.muscleandfitness.com/wp-content/uploads/2018/12/main-incline-fly-1109.jpg?w=1109&h=614&crop=1&quality=86&strip=all", title: "FITNESS" ,color:"#53D769"},
  { id:4,url: "https://www.muscleandfitness.com/wp-content/uploads/2018/12/main-incline-fly-1109.jpg?w=1109&h=614&crop=1&quality=86&strip=all", title: "ABS" ,color:" #FC3D39"},
  { id:5,url: "https://www.muscleandfitness.com/wp-content/uploads/2018/12/main-incline-fly-1109.jpg?w=1109&h=614&crop=1&quality=86&strip=all", title: "DIET" ,color:"#FECB2E"},
  {id:6, url: "https://www.muscleandfitness.com/wp-content/uploads/2018/12/main-incline-fly-1109.jpg?w=1109&h=614&crop=1&quality=86&strip=all", title: "CARDIO" ,color:"#147EFB"},
];

useLayoutEffect(()=>{ 
  navigation.setOptions({
      headerRight: ()=>MoreDetail()
  })
})
return (
    <View style={{padding: 10 }}>
<FlatList
        data={Data}
        renderItem={({ item:{title,url,id,color} }) => (
  <HomeList  url={url} title={title} navigation={navigation} color={color}/>
)} keyExtractor={item => item.key}

      />
    </View>
  )
}

export default HomePage