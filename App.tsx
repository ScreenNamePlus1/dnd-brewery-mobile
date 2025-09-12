import React from 'react';
import { StatusBar } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { colors } from './src/styles/colors';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <AppNavigator />
    </>
  );
};

export default App;