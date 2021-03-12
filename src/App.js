import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SongsList from './songs/SongsList';
import SongDetails from './songs/SongDetails';
import SongsProvider from './songs/SongsProvider';

const Stack = createStackNavigator();

function App() {
  return (
    <SongsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Songs" component={SongsList} />
          <Stack.Screen name="SongDetails" component={SongDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SongsProvider>
  );
}

export default App;
