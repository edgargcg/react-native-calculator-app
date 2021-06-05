import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { Calculator } from './src/screens/Calculator';
import commonStyles from './src/themes/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={commonStyles.background}>
      <StatusBar 
        backgroundColor="black"
        barStyle="light-content"
      />
      <Calculator />
    </SafeAreaView>
  )
}

export default App;
