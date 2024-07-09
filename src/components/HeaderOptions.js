import React from 'react';
import { TouchableOpacity, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height } = Dimensions.get('window');

const CustomHeaderOptions = ({ navigation }) => {
  return {
    title: '600 câu GPLX', // Đổi tên header
    headerStyle: {
      height: height / 9.5, // Chỉnh kích thước của header
      backgroundColor: '#0095dd'
    },
    headerTitleStyle: {
      fontSize: 23, // Chỉnh kích thước tiêu đề
      color: 'white',
    },
    headerLeft: null, // Ẩn nút back
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
         <Text>Kết thúc</Text>
      </TouchableOpacity>
    ),
  };
};

export default CustomHeaderOptions;
