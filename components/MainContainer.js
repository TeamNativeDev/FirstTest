import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const MainContainer = () => {
  const [num, setNum] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        First app where to play with React Native
      </Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => setNum(num + 1)} title="increase" />
        <Text style={styles.counter}>{num}</Text>
        <Button
          onPress={() => {
            if (num) {
              setNum(num - 1);
            }
          }}
          title="decrase"
        />
      </View>
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    // marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  counter: {
    fontSize: 25,
    fontWeight: '800',
  },
});
