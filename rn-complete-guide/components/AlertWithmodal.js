import React, { useState } from 'react';
import { StyleSheet, Text,Alert, Modal,Pressable, View, TextInput, Button, ScrollView, FlatList } from 'react-native';


const AlertWithmodal = props => {
//const [modalVisible, setModalVisible] = useState(false);

	return ( 
		<Modal
        animationType="slide"
        transparent={true}
        visible={props.popupModalFlag}
        onRequestClose={props.forBackButton.bind(this,0)}
      >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Press Ok to Delete</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={props.delFun.bind(this,props.GoalId)}
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