import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Api from '../components/api/Api';

export default function ApiScreen() {
  return (
    <ScrollView style={styles.container}>
      <Api></Api>
    </ScrollView>
  );
}

ApiScreen.navigationOptions = {
  title: 'Api Request',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
