import React from 'react';
import axios from 'axios';
import { Modal, TouchableHighlight, StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput, Image
} from 'react-native';

export default class Base2 extends React.Component {
    constructor(props) {
    
        super(props);
     
        this.array = [],     
        this.state = {
            arrayHolder: [],
            textInput_Holder: '',
            modalVisible: false,
            p: '',
        }
      }
     
      componentDidMount() {
        this.setState({ arrayHolder: [...this.array] })
      }

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
     
      joinData = () => {
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
          this.array.push(response.data.message);
        })
        .catch(error => {
          console.log(error);
        });

        this.setState({ arrayHolder: [...this.array] })
      }
     
      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#607D8B",
            }}
          />
        );
      }
     
      GetItem(item) {
        this.state.p = item;
        this.setModalVisible(true)
      }
     
      AlertData = () => {
        alert("Your Input data is : " + this.state.textInput_Holder);
      }

      render() {
        return (
          <View style={styles.MainContainer}>
              
            <TextInput
              placeholder="Enter Value Here"
              onChangeText={data => this.setState({ textInput_Holder: data })}
              style={styles.textInputStyle}
              underlineColorAndroid='transparent'
            />
     
            <TouchableOpacity onPress={this.AlertData} activeOpacity={0.7} style={styles.button} >
              <Text style={styles.buttonText}> Show My Input </Text>
            </TouchableOpacity>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
                />
            <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
                <Text style={styles.buttonText}> Get Data </Text>
            </TouchableOpacity>

            <FlatList
     
              data={this.state.arrayHolder}
     
              width='100%'
     
              extraData={this.state.arrayHolder}
     
              keyExtractor={(index) => index.toString()}
     
              ItemSeparatorComponent={this.FlatListItemSeparator}
     
              renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item)} > {item} </Text>}
              
            />
            
            <View style={styles.MainContainer}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>

                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>{this.state.p}</Text>
                            <Image source={{uri:this.state.p, width: 150, height: 150}}></Image>

                            <TouchableHighlight style={styles.button}
                                onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.buttonText}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
          </View>
          
        );
      }
    }
     
    const styles = StyleSheet.create({
     
      MainContainer: {
     
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 2
     
      },
     
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
     
      textInputStyle: {
     
        textAlign: 'center',
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 7,
        marginTop: 12
      },
     
      button: {
     
        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        marginTop: 10
      },
     
      buttonText: {
        color: '#fff',
        textAlign: 'center',
      },
     
    });