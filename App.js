import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Navigation/HomePage';
import Days from './Navigation/Days';
import Exercise from './Navigation/Exercise';
import Demo from './Navigation/Demo';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name ="Home" component={HomePage}  options={()=>{
          return( { title:"🏋🏻GymCoachPro🏋🏻",
          headerStyle : {
            backgroundColor:"#5FC9F8",
            
          },
          headerTintColor:"white"
          })
          }}/>
  <Stack.Screen name ="Days" component={Days}   options={({route})=>{
          return( { title : route.params.title, 
          headerStyle : {
            backgroundColor:route.params.color
          },
          headerTintColor:"white"
          })
          }} />
  <Stack.Screen name ="Exercise" component={Exercise}  options={({route})=>{
          return( { title : route.params.day, 
          headerTintColor:"black"
          })
          }} />
  <Stack.Screen name ="Demo" component={Demo}  />
</Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
