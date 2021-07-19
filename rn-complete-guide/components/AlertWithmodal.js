import React, { useState } from 'react';
import { StyleSheet, Text,Alert, Modal,Pressable, View, TextInput, Button, ScrollView, FlatList } from 'react-native';


const AlertWithmodal = props => {
	//const [modalVisible, setModalVisible] = useState(true);

	return ( 
		<Modal
        animationType="slide"
        transparent={true}
        visible={props.popupModalState}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!props.popupModalState);
        }}
      >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Press Ok to Delete</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!props.modalStateValue);props.deleteItem;}}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>


      </Modal>
      )


}

const styles = StyleSheet.create({
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#88b04b",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
   buttonClose: {
    backgroundColor: "#c7381f",
  },
   modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  
});

export default AlertWithmodal;