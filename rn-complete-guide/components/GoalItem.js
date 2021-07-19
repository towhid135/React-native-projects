import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Modal,Pressable  } from 'react-native';
import AlertWithmodal from './AlertWithmodal';

const GoalItem = props => {
	return (
		<View> 
		<TouchableOpacity activeOpacity="0.6" onPress= {props.onDelete}>
		<View style={styles.ListItem}>
			  <Text >{props.title}</Text>
		</View>
		</TouchableOpacity>

		<View>
              <Modal
		        animationType="slide"
		        transparent={true}
		        visible={props.popupModalState}
		        onRequestClose={
		          
		          props.onDelete
		        }
              >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Press Ok to Delete</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={props.delFun.bind(this,props.id)}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>


      </Modal>

		</View>

		</View>
	)
	
};

const styles = StyleSheet.create({
	ListItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "oldlace",
		borderColor: '#000',
		borderWidth: 1
    },
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

export default GoalItem;