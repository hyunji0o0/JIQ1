import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FolderScreen from './screens/FolderScreen';
import MultipleQuiz from './screens/MultipleQuiz';
import ShortAnswerQuiz from './screens/ShortAnswerQuiz';
import LogoAnimation from './screens/LogoAnimation';

const Stack = createStackNavigator();

const App = () => {
  const [tabPressed, setTapPressed] = useState(true);
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <LogoAnimation />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ animationEnabled: false, gestureEnabled:false }}>
          <Stack.Screen name="Home">
            {props => (
              <HomeScreen {...props} tabPressed={tabPressed} setTapPressed={setTapPressed} />
            )}
          </Stack.Screen>
          <Stack.Screen name="FolderScreen" component={FolderScreen}>
          </Stack.Screen>
          <Stack.Screen name="MultipleQuiz" component={MultipleQuiz}>
          </Stack.Screen>
          <Stack.Screen name="ShortAnswerQuiz" component={ShortAnswerQuiz}>
          </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;