import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import NavigationRoute from './src/NavigationConfig';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle} >
      <NavigationRoute />
    </SafeAreaView>
  );
}

export default App;
