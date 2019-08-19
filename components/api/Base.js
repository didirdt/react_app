import React from 'react';
import axios from 'axios';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class PersonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ImageURL: '',
      content: true,
    }
  }
  
  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      console.log(response.data);
      this.setState({ ImageURL: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }

  render(){
    const { ImageURL } = this.state.ImageURL;

    return( 
      <View style={styles.helpContainer}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.componentHideAndShow}
            title="Hide Data"
          />
        </View>
        <View style={styles.helpContainer}>
          {
            this.state.content ? <Text>asdasdasd {console.log(ImageURL)}</Text>: null
          }
        </View>
      </View>
    );
  }
}

function onPressButton() {

}


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
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
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
