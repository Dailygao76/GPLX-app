import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const MenuItem = ({ item }) => {
  const navigation = useNavigation();

  return (
      <TouchableOpacity style={[styles.container, { backgroundColor: item.color }]}  onPress={() => navigation.navigate(item.screenName)}>
        <Icon name={item.iconName} size={35} color={'white'} />
        <View style={styles.detailsContainer}>
          <Text style={styles.nameFunc}>{item.nameFunc}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 35,
    margin: 5,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: (width / 2) - 20,
    height: (height / 7),
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameFunc: {
    fontSize: 18,
    marginTop: 7,
    marginBottom: 5,
    color: 'white',
  },
});

export default MenuItem;
