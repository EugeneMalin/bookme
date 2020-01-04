import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => (
  <SafeAreaView style={styles.scrollContainer}>
    <ScrollView style={styles.scrollView}>
      <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default memo(Background);
