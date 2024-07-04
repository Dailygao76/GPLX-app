import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import { Provider } from 'react-native-paper'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/core/theme'
import Home from './src/screens/Home'
import RandomTest from './src/screens/RandomTest'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeaderOptions from './src/components/HeaderOptions'; 
const { height } = Dimensions.get('window'); 

export default function App() {
  
const Stack = createStackNavigator();

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter, // Hiệu ứng chuyển cảnh
          }}
        >
      
          <Stack.Screen 
            name="Main" 
            component={Home}
            options={({ navigation }) => ({
              title: '600 câu GPLX', // Đổi tên header
              headerStyle: {
                height: (height/9.5), // Chỉnh kích thước của header
                backgroundColor: '#0095dd'
              },
              headerTitleStyle: {
                fontSize: 23, // Chỉnh kích thước tiêu đề
                color: 'white',
              },
            
              headerRight: () => (
                <TouchableOpacity  onPress={() => navigation.navigate()}>
                  <Icon name='cog-outline' size={25}  style={styles.setting} ></Icon>
                </TouchableOpacity>
              ),
            })}
          />

          <Stack.Screen name="Random" component={RandomTest}  
          options={({ navigation }) => CustomHeaderOptions({ navigation })} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setting: {
    margin: 10,
    marginBottom: 10,
    color: 'white',
    
  }
});
