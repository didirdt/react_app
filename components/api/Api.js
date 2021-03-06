import React, {Component} from 'react';
import {Modal, TouchableHighlight, StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';

export default class Api extends Component {
  render() {
    return (
        <View style={styles.container}>
            <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Image
                    source={
                        __DEV__
                        ? require('../../assets/images/robot-dev.png')
                        : require('../../assets/images/robot-prod.png')
                    }
                    style={styles.welcomeImage}
                    />
                </View>
        
                <View style={styles.helpContainer}>
                    <Text>CRUD API</Text>
                </View>
            </ScrollView>
        </View>
    );
  }
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });
  