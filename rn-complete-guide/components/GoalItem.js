import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
	return (
		
		<TouchableOpacity activeOpacity="0.6" onPress= {props.onDelete.bind(this,props.id)}>
		<View style={styles.ListItem}>
			  <Text >{props.title}</Text>
		</View>
		</TouchableOpacity>

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
});

export default GoalItem;