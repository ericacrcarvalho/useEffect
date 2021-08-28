import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Effect1 from './features/effect1/Effect1';
import Effect2 from './features/effect1/Effect2';

const App = () => {

  return (    
    <View style={styles.container}>
      <Effect1/>
      <Effect2/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});
