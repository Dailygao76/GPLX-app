import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../components/Background1';
import MenuItem from '../components/MenuItem';
import List from '../components/List';
const Home = () => {
    const Menu = [
        {
            id: 1,
            iconName: 'infinity',
            nameFunc: 'Đề ngẫu nhiên',
            screenName: 'Random',
            color: '#fbbc30'
        },
        {
            id: 2,
            iconName: 'file-document-multiple',
            nameFunc: 'Thi theo đề',
            screenName: 'Random',
            color: '#d74946'
        },
        {
            id: 3,
            iconName: 'account-check',
            nameFunc: 'Các câu bị sai',
            screenName: 'Random',
            color: '#94b224',
        },
        {
            id: 4,
            iconName: 'book-education',
            nameFunc: 'Ôn tập câu hỏi',
            screenName: 'Random',
            color: '#0069ce',
        },
        {
            id: 5,
            iconName: 'traffic-light',
            nameFunc: 'Các biển báo',
            screenName: 'Random',
            color: '#314855',
        },
        {
            id: 6,
            iconName: 'text-box-check',
            nameFunc: '60 câu điểm liệt',
            screenName: 'Random',
            color: '#69ceb8',
        },
        {
            id: 7,
            iconName: 'bookmark-check',
            nameFunc: 'Mẹo',
            screenName: 'Random',
            color: '#790f59',
        },

         {
            id: 8,
            iconName: 'chart-bar',
            nameFunc: 'Top 50 câu sai',
            screenName: 'Random',
            color: '#ff7fc7',
        },
    ];

    return (
        <Background>
            <List data={Menu} ItemComponent={MenuItem} column={2} />
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;